const { products, addProduct, updateProduct, deleteProduct } = require('./data');

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(product => product.id === id),
  },
  Mutation: {
    addProduct: (_, { name, description, price, inStock }) => {
      const newProduct = addProduct({ name, description, price, inStock });
      return newProduct;
    },
    updateProduct: (_, { id, name, description, price, inStock }) => {
      const updated = updateProduct(id, { name, description, price, inStock });
      if (!updated) {
        throw new Error('Product not found');
      }
      return updated;
    },
    deleteProduct: (_, { id }) => {
      const success = deleteProduct(id);
      return success;
    },
  },
};

module.exports = resolvers;
