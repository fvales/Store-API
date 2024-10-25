import express from 'express';
import 'dotenv/config';
import { connectDB } from './db/connect.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

const start = async (connectionString) => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, () => {
      console.log('Listening...');
    });
  } catch (e) {
    console.log(e);
  }
};

start(process.env.MONGO_URI);
app.use(express.json());

app.use('/api/v1/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
