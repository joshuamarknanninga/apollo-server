const { v4: uuidv4 } = require('uuid');

// In-memory array to store products
let products = [
  {
    id: uuidv4(),
    name: 'Laptop',
    description: 'A high-performance laptop',
    price: 1500.0,
    inStock: true,
  },
  {
    id: uuidv4(),
    name: 'Smartphone',
    description: 'A latest model smartphone',
    price: 800.0,
    inStock: true,
  },
];

// Add a new product
function addProduct({ name, description, price, inStock }) {
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    inStock,
  };
  products.push(newProduct);
  return newProduct;
}

// Update an existing product
function updateProduct(id, { name, description, price, inStock }) {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;

  const updatedProduct = {
    ...products[index],
    name: name !== undefined ? name : products[index].name,
    description: description !== undefined ? description : products[index].description,
    price: price !== undefined ? price : products[index].price,
    inStock: inStock !== undefined ? inStock : products[index].inStock,
  };

  products[index] = updatedProduct;
  return updatedProduct;
}

// Delete a product
function deleteProduct(id) {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}

module.exports = {
  products,
  addProduct,
  updateProduct,
  deleteProduct,
};
