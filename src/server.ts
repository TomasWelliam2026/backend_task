import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

import { DBconnection } from './database/datasource';
import api from './routes';

dotEnv.config() ;
const app = express();

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded()) ;
app.use('', api) ;

const PORT = process.env.PORT || 3000 ;


app.post('/api/test', (req: Request, res: Response) => {
  return res.json({ msg: "Hello!, I'm backend" }) ;
});

DBconnection() ;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});