import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating users:', error); // Log the detailed error
    res.status(500).json({ error: 'Error creating user' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(201).json(users);
  } catch (error) {
    console.error('Error fetching users:', error); // Log the detailed error
    res.status(500).json({ error: 'Error fetching users' });
  }
};