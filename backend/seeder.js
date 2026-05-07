 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/productModel')

dotenv.config()

const products = [
  {
    name: 'Nike Air Max',
    description: 'Comfortable running shoes',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Shoes',
    stock: 10
  },
  {
    name: 'Apple iPhone 15',
    description: 'Latest iPhone with amazing camera',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
    category: 'Electronics',
    stock: 15
  },
  {
    name: 'Sony Headphones',
    description: 'Noise cancelling wireless headphones',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 20
  },
  {
    name: 'Leather Jacket',
    description: 'Premium genuine leather jacket',
    price: 199,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: 'Clothing',
    stock: 8
  },
  {
    name: 'MacBook Pro',
    description: 'Powerful laptop for professionals',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'Electronics',
    stock: 5
  },
  {
    name: 'Adidas T-Shirt',
    description: 'Comfortable sports t-shirt',
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Clothing',
    stock: 30
  }
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Products added! ✅')
    process.exit()
  })
  .catch(err => console.log(err))