import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

import api from './routes';

dotEnv.config() ;
const app = express();

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded()) ;
app.use('', api) ;

const PORT = process.env.PORT || 3000 ;


app.post('/api/test', (req: Request, res: Response) => {
  return res.json({ msg: "ok" }) ;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});