import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json()); // express.json is middleware, which passes through the json resplnse

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5050;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log(`Server is listening port ${port}`);
  } catch (error) {
    console.log(error);
  }
};

start();
