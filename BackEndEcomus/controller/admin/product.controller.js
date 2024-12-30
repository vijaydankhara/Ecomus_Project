const ProductServices = require('../../services/productServices');
const productServices = new ProductServices();

exports.addNewProduct = async (req, res) => {
    try {
      const existingProduct = await productServices.getProduct({ title: req.body.title, isDelete: false });
      if (existingProduct) {
        return res.status(400).json({ message: 'Product already exists' });
      }
      req.body.price = Number(req.body.price);
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded!' });
      }
    //   const imagePath = req.files.map(file => file.path.replace(/\\/g, "/"));
    const imagePath = req.files.map(file => `/images/${file.filename}`);

      const newProduct = await productServices.addNewProduct({
        ...req.body,
        images: imagePath,
      });
  
      res.status(201).json({ product: newProduct, message: 'Product added successfully' });
    } catch (error) {
        console.error("Error in addNewProduct:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        let products = await productServices.getAllProducts(req.query);
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

