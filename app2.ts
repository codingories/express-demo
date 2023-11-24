import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('你好');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
