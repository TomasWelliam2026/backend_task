import express from 'express';
import { SignIn, SignUp } from '../../../controllers';

const router = express() ;

router.post('/signin', SignIn );

router.post('/signup', SignUp );

// router.post('/reset', )

export default router;
