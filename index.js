import express from 'express';
import 'dotenv/config';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

const app = express();
const PORT = process.env.PORT || 3000;

const start = () => {
  //   try {
  //     await connectDB(connectionString);
  app.listen(PORT, () => {
    console.log('Listening...');
  });
  //   } catch (e) {
  //     console.log(e);
  //   }
};

start();
app.use(express.json());
app.use(notFound);
app.use(errorHandler);
