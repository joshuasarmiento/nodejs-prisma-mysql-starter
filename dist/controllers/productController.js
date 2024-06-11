"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProducts = exports.createProduct = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
// Create a product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price } = req.body; // Type assertion to Product interface
    try {
        const newProduct = yield prismaClient_1.default.product.create({
            data: { name, description, price },
        });
        res.status(201).json(newProduct); // 201 Created
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
});
exports.createProduct = createProduct;
// Get all products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prismaClient_1.default.product.findMany();
        res.status(200).json(products); // 200 OK
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.id);
    try {
        const product = yield prismaClient_1.default.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Error fetching product' });
    }
});
exports.getProductById = getProductById;
// Update a product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.id);
    const { name, description, price } = req.body;
    ;
    try {
        const updatedProduct = yield prismaClient_1.default.product.update({
            where: { id: productId },
            data: { name, description, price },
        });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Error updating product' });
    }
});
exports.updateProduct = updateProduct;
// Delete a product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.id);
    try {
        yield prismaClient_1.default.product.delete({
            where: { id: productId },
        });
        res.status(204).end();
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Error deleting product' });
    }
});
exports.deleteProduct = deleteProduct;
