const express = require('express');
require('dotenv').config();
const connection = require('./dbConnect/connection');
const Products = require('./models/products');
connection();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.post('/products', (req, res) => {
  Products.create(req.body);
  res.json({
    msg: 'products',
  });
});

app.get('/products', async (req, res) => {
  const data = await Products.find();
});

app.put('/products/:id', async (req, res) => {
  await Products.findByIdAndUpdate(req.params.id, req.body);
});

app.delete('/products/:id', async (req, res) => {
  await Products.findByIdAndDelete(req.params.id);
});

app.get('/products', async (req, res) => {
  const data = await Products.find();
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on the port ${process.env.PORT}`);
});
