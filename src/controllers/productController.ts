import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';

// Create a product
export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price },
    });
    res.status(201).json(newProduct); // 201 Created
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products); // 200 OK
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error); 
    res.status(500).json({ error: 'Error fetching product' });
  }
}

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const { name, description, price } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, description, price },
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error); 
    res.status(500).json({ error: 'Error updating product' });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  try {
    await prisma.product.delete({
      where: { id: productId },
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting product:', error); 
    res.status(500).json({ error: 'Error deleting product' });
  }
};