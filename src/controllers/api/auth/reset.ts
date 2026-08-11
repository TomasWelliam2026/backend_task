import bcrypt from 'bcryptjs' ;
import { AppDataSource } from "../../../database/datasource";

import { User, UserEntity } from '../../../entities/user' ;

import * as Constants from '../../../config/messages' ;

export const PasswordReset = async (req:any, res:any) => {
    const { email, origin, newPassword } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user:any = await userRepository.findOneBy({ email: email }) ;

   if( !(await bcrypt.compare(origin, user.password)) ) return res.json({ msg: Constants.Failure }) ;

    user.password = await bcrypt.hash(newPassword, 10) ;

    const result = await userRepository.save(user) ;

    res.json({ msg: Constants.Success }) ;
}
