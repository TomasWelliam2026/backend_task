import express, { Request, Response } from 'express';
import dotEnv from 'dotenv';

dotEnv.config() ;

const app = express();

const PORT = process.env.PORT || 3000 ;

app.post('/api/users', (req: Request, res: Response) => {
  const { username, email } = req.body;
 
  if (!username || !email) {
    return res.status(400).json({ message: 'Username and email are required' });
  }
  return res.json({ msg: "ok" }) ;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});