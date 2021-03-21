import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
//DB
import connectDB from './config/db.js';

dotenv.config();

//Conneect DB
connectDB();

const app = express();

//Except JSON data in body-parser
app.use(express.json());

//Test Server
app.get('/', (req, res) => {
  res.send('API  is Running...');
});

//Routes
app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);

//Custom_Errorhandling
app.use(notFound);
app.use(errorHandler);

//PORT
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running ${process.env.NODE_ENV} mode in ${PORT}`.yellow.bold
  )
);
