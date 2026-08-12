import { Response } from 'express';
import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import { AppDataSource } from "../../../database/datasource";

import { User, UserEntity } from '../../../entities/user' ;
import { secretOrKey } from '../../../config/config';
import * as Constants from '../../../config/messages' ;

export const SignUp = async (req:any, res:any) => {
    const { username, newPassword, email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;
    const newUser = {
        username: username,
        password: await bcrypt.hash(newPassword, 10),
        email: email
    }

    const result = await userRepository.save(newUser) ;

    res.json({ msg: Constants.Success, code: 200 }) ;
}

export const SignIn = async (req:any, res:Response) => {
    const { email, password } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user:any = await userRepository.findOneBy({ email: email }) ;

    if( !(await bcrypt.compare(password, user.password)) ) return res.json({ msg: Constants.PasswordFalse, code: 401 }) ;

    const token = await jwt.sign({
        email: email,
        username: user.username,
    }, secretOrKey, { expiresIn: "1h" }) ;

    res.json({ msg: Constants.SignInOk, token: token, code: 200 }) ;
}

