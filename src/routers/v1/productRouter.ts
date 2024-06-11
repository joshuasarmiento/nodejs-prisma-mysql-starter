import { Router } from 'express';
import { 
    createProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct, 
    getProducts 
} from '../../controllers/productController';

const router = Router();

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
