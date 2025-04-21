import express, { Application } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import authRoutes from './Routes/authRoute';
import errorHandler from './Middlewares/errorHandle';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});
