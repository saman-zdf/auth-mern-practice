import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import notFound from './middleware/not-found.js';
import errorHandlers from './middleware/error-handlers.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

// auth router
import authRouter from './router/authRouter.js';
app.use('/user', authRouter);

// middleware
app.use(express.json());
app.use(notFound);
app.use(errorHandlers);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
