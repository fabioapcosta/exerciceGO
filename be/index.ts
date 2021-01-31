import express from 'express';
require('dotenv').config()
// rest of the code remains same
const app = express();
import bodyParser from 'body-parser';
var cors = require('cors')
const PORT = process.env.BE_PORT;
import weatherRouter from './api/weather'

app.use(bodyParser.json())
app.use(cors())
app.use('/cities', weatherRouter);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

