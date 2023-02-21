import express = require('express');
import calculatorRouter from './internal/calculator';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/calculator', calculatorRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});