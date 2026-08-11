import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { AppDataSource } from '../database/datasource' ;
import { User, UserEntity } from '../entities/user' ;
import { secretOrKey } from "../config/config";
import * as Constants from '../config/messages' ;

export const tokenChecking = async (req:any, res:Response, next:NextFunction) => {
    const { token } = req.headers ;

    if( !token ) return res.json({ msg: Constants.TokenFalse }) ;
    
    const decode:any = jwt.verify(token, secretOrKey ) ;

    if( !decode ) return res.json({ msg: Constants.TokenFalse }) ;
    
    req.body.email = decode.email ;
    
    next() ;
}

export const isUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email, password } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( !user ) return res.json({ msg: Constants.UserNotFound }) ;
    if( !(await bcrypt.compare(password, user.password)) ) return res.json({ msg: Constants.PasswordFalse }) ;

    next() ;
}

export const NotUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( user ) return res.json({ msg: Constants.UserExist }) ;
    
    next() ;
}

