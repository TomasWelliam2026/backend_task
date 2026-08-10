import { Request, Response } from 'express';
import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;

import { User } from '../../../entities/user' ;

export const SignUp = async (req:Request, res:Response) => {
    const { username, password, email } = req.body ;

    const user = new User() ;

    user.username = username ;
    user.password = await bcrypt.hash(password, 10) ;
    user.email = email;

    await user.save() ;

    res.json({ msg: "success" }) ;
}

export const SignIn = async (req:Request, res:Response) => {
    const { email, password } = req.body ;

    const user:any = await User.findOne({ email: email }) ;

    if( !bcrypt.compare(password, user.password) ) return res.json({ msg: "failure" }) ;

    const token = await jwt.sign({
        email: email,
        username: user.username,
    }, "secretkeyappearshere", { expiresIn: "1h" }) ;

    res.json({ msg: "success", token: token }) ;
}

