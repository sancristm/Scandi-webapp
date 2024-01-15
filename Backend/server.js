import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 5000;
import productsRoutes from './routes/productsRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
//sending raw data as well as raw data
app.use(express.urlencoded({ extended: true }));

// the expected routes from my point of view
app.use('/api/products', productsRoutes); // setting up base url
app.use('api/addProduct', productsRoutes);
// Delete a single product by sku and mass delete
// app.use('api/:productId', productsRoutes);

app.use('/api/massDelete', productsRoutes);

//app.use("/api/deleteBySKU/:productSKU", productsRoutes);
app.use('/api/deleteBySKU/', productsRoutes);

app.get('/', (req, res) => res.send('server is ready to start'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
