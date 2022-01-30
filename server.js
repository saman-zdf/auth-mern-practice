import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import 'express-async-errors';
import notFound from './middleware/not-found.js';
import errorHandlers from './middleware/error-handlers.js';
import connectDB from './database/connectDB.js';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

// auth router
import authRouter from './router/authRouter.js';
app.use('/user', authRouter);

// middleware

app.use(notFound);
app.use(errorHandlers);

const PORT = process.env.PORT || 5000;

const start = () => {
  connectDB(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
};

start();
