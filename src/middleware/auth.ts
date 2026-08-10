import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from '../entities/user' ;

const tokenChecking = async (req:Request, res:Response, next:NextFunction) => {
    const { token } = req.body ;

    const decode = jwt.verify(token, "secretkeyappearshere") ;

    if( !decode ) return res.json({ msg: "Dangerous access!" }) ;
    
    next() ;
}

const userExist = async (req:Request, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const user = await User.findOne({ email: email }) ;

    if( !user ) return res.json({ msg: "User not found!" }) ;

    next() ;
}

