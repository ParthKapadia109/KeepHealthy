const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const product = new Product({
      title,
      description,
      price,
      image: req.file ? req.file.path : null,
      category,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    // Extract the title query parameter
    const { title } = req.query;

    // Check if title is provided
    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    // Find products with a title that includes the search term (case-insensitive)
    const products = await Product.find({
      title: { $regex: title, $options: "i" }, // 'i' makes the search case-insensitive
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
