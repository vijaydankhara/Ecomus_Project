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
    const imagePath = req.files.map(file => `/public/images/${file.filename}`);

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

exports.getProduct = async (req,res) =>{
try {
    let product = await productServices.getProductById(req.query.productId);
    if(!product){
        return res.status(400).json({message: 'Product Is Not Found...'});
    }
    res.status(200).json(product);
} catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal Server Error!!!'});
}
};

exports.updateProduct = async (req,res) =>{
  try {
    let product = await productServices.getProductById(req.query.productId);
    if(!product){
      return res.status(404).json({message: 'Product Is Not Found!!!'});
    }
    product = await productServices.updateProduct(product._id,{...req.body});
    res.status(202).json({product, message:'Product Is Updated!!!...'});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal Server Error!!!'}); 
  }
};

exports.deleteProduct = async (req,res) =>{
  try {
    let product = await  productServices.getProductById(req.query.productId);
    if(!product){
      return res.status(404).json({message: 'Product Is Not Found!!!...'});
    }
    product = await productServices.updateProduct(product._id,{isDelete: true});
    res.status(200).json({product, message: 'Product Is Deleted!!!...'});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Internal Server Error!!!..."})
  }
};

