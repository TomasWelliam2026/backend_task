import express from 'express';
import { SignIn, SignUp, PasswordReset } from '../../../controllers';
import { tokenChecking, isUserExist, NotUserExist } from '../../../middleware/auth';

const router = express() ;

router.post('/signin', isUserExist, SignIn );

router.post('/signup', NotUserExist, SignUp );

router.post('/reset', tokenChecking, PasswordReset) ;

export default router;
