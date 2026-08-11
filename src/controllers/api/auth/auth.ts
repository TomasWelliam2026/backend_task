import { Request, Response } from 'express';
import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import { AppDataSource } from "../../../database/datasource";

import { User, UserEntity } from '../../../entities/user' ;
import { secretOrKey } from '../../../config/config';

export const SignUp = async (req:any, res:any) => {
    const { name, password, email } = req.body ;

    console.log(req.body) ;
    // const userRepository = AppDataSource.getRepository<User>(UserEntity) ;
    // const newUser = {
    //     username: username,
    //     password: await bcrypt.hash(password, 10),
    //     email: email
    // }

    // await userRepository.save(newUser) ;

    res.json({ msg: "success" }) ;
}

export const SignIn = async (req:Request, res:Response) => {
    const { email, password } = req.body ;

    // const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    // const user:any = await userRepository.findOneBy({ email: email }) ;

    // if( !bcrypt.compare(password, user.password) ) return res.json({ msg: "failure" }) ;

    // const token = await jwt.sign({
    //     email: email,
    //     username: user.username,
    // }, secretOrKey, { expiresIn: "1h" }) ;

    // res.json({ msg: "success", token: token }) ;
}

