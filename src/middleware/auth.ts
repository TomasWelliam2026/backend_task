import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { AppDataSource } from '../database/datasource' ;
import { User, UserEntity } from '../entities/user' ;
import { secretOrKey } from "../config/config";

export const tokenChecking = async (req:Request, res:Response, next:NextFunction) => {
    const { token } = req.body ;

    const decode = jwt.verify(token, secretOrKey ) ;

    if( !decode ) return res.json({ msg: "Dangerous access!" }) ;
    
    next() ;
}

export const userExist = async (req:Request, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( !user ) return res.json({ msg: "User not found!" }) ;

    next() ;
}

