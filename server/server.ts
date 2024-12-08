// import ...
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/mongoose.config';

// config ...
dotenv.config();

const uri: string = process.env.MONGODB_CONNECT_URI || "";
connectDB(uri);

// import router ...

const app = express();
const port = process.env.PORT;

// middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
