import { Request, Response } from 'express';
import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import { AppDataSource } from "../../../database/datasource";

import { User, UserEntity } from '../../../entities/user' ;
import { secretOrKey } from '../../../config/config';


export const PasswordReset = async (req:any, res:any) => {
    const { origin, newPassword } = req.body ;

    console.log(req.body) ;
    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    // const user:any = await userRepository.findOneBy({ email: email }) ;

    // if( !bcrypt.compare(origin, user.password) ) return res.json({ msg: "failure" }) ;

    // user.password = await bcrypt.hash(newPassword, 10) ;

    // await userRepository.save(user) ;

    res.json({ msg: "success" }) ;
}
