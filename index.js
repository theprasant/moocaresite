import express from "express";
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});