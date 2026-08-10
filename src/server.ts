import express, { Request, Response } from 'express';
import dotEnv from 'dotenv';

dotEnv.config() ;

const app = express();

const PORT = process.env.PORT || 3000 ;

app.post('/api/test', (req: Request, res: Response) => {
  return res.json({ msg: "ok" }) ;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});