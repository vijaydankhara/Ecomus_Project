const ProductServies = require('../../services/productServices');
const productServies = new ProductServies();

exports.addNewProduct = async (req, res) => {
    try {
        let product = await productServies.getProduct({ title: req.body.title, isDelete: false });
        if (product) {
            return res.status(400).json({ message: 'Product is alredy exist' });
        }
        product = await productServies.addNewProduct({ ...req.body });
        res.status(201).json({ product, message: 'Product Added...' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error!!!...' });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        let products = await productServies.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error!!!...' })
    }
};

exports.getproduct = async (req,res) =>{
try {
    let product = await productServies.getProductById(req.query.productId);
    if(!product){
        return res.status(400).json({message: 'Product Is Not Found...'});
    }
    res.status(200).json(product);
} catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal Server Error!!!'});
}
};

