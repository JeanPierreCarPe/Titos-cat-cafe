import Product from '../models/Product.js'

/* CREATE */
export const createProduct = async (req, res) => {
    try {
        const {productName, description, price, productType, picturePath, discount} = req.body;
        const newProduct = new Product({
            productName,
            description,
            price,
            productType,
            picturePath,
            discount,
        })
        await newProduct.save();

        const product = await Product.find();
        res.status(201).json(product);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

/* READ */
export const getProducts = async (req, res) => {
    try {
        const product = Product.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}