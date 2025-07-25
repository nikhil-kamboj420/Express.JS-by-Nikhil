//! product controller to handle product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fitness Smartwatch",
    price: 4599,
    category: "Wearables",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1499,
    category: "Accessories",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1999,
    category: "Audio",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 5,
    name: "LED Monitor",
    price: 8999,
    category: "Computer",
    inStock: false,
    rating: 4.6,
  },
];
// ?sending all products and single product data
export const getAllProducts = (req, res) => {
  if (products) {
    res.json(products);
  } else {
    res.send("No products found");
  }
};
export const getProduct = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.send("No products found");
  }
};
