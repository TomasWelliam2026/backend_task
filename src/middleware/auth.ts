import { Response, NextFunction } from "express";
import { secretOrKey } from "../config/config";
import jwt from "jsonwebtoken";

import { AppDataSource } from '../database/datasource' ;
import { User, UserEntity } from '../entities/user' ;
import * as Constants from '../config/messages' ;

export const tokenChecking = async (req:any, res:Response, next:NextFunction) => {
    const { authorization } = req.headers ;

    console.log("header ->", req.headers) ;
    
    if( !authorization ) return res.json({ msg: Constants.TokenFalse, code:401 }) ;
    
    const decode:any = jwt.verify(authorization, secretOrKey ) ;

    if( !decode ) return res.json({ msg: Constants.TokenFalse, code: 401 }) ;
    
    req.body.email = decode.email ;
    
    next() ;
}

export const isUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( !user ) return res.json({ msg: Constants.UserNotFound, code: 401 }) ;

    next() ;
}

export const NotUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    console.log(req) ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( user ) return res.json({ msg: Constants.UserExist, code: 401 }) ;
    
    next() ;
}

export const confirmPassword = async (req:any, res:Response, next:NextFunction) => {
    const { newPassword, confirmPassword } = req.body ;

    console.log(req.body) ;

    if( newPassword !== confirmPassword ) return res.json({ msg: Constants.PasswordConfirm, code: 401 }) ;
        
    next() ;
}

