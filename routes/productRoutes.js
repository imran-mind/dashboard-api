const ensureAuthenticated = require('../auth');
const { createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById } = require('../conrollers/productController');

const router = require('express').Router();

router.post('/', ensureAuthenticated, createProduct); //secure
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', ensureAuthenticated, updateProductById);//secure
router.delete('/:id', ensureAuthenticated, deleteById);//secure

module.exports = router