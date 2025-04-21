import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import AppError from '../utils/AppError'

const prisma = new PrismaClient();


export const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Request come ");
    try {
      const { email, password } = req.body;
        
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || user.password !== password) {
        throw new AppError('Invalid email or password', 401);
      }
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      next(error);
    }
  };
  
  