import * as Yup from 'yup';
import Product from '../models/Product.js';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, price, category } = request.body;

   
    if (!request.file) {
      return response.status(400).json({ error: 'File not provided' });
    }

    const { filename:path } = request.file; 

    try {
      const product = await Product.create({
        name,
        price,
        category,
        path 
      });

      return response.status(201).json(product);
    } catch (err) {
      return response.status(500).json({ error: 'Error creating product', details: err.message });
    }
  }

  async index(request, response) {
    try {
      const products = await Product.findAll();
      return response.json(products);
    } catch (err) {
      return response.status(500).json({ error: 'Error fetching products', details: err.message });
    }
  }
}

export default new ProductController();
