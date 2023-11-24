import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('你好');
});

const port: number = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
