import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import cors from 'cors' ;


import { DBconnection } from './database/datasource';
import api from './routes';

dotEnv.config() ;
const app = express();

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded()) ;
app.use(cors()) ;

app.use('', api) ;

const PORT = process.env.PORT ;

DBconnection() ;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});