import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?search=${search}&category=${category}`)
        setProducts(data) 
      setLoading(false)
      } catch (err) {
        setError('Failed to load products')
        setLoading(false)
      }
    }
    fetchProducts()
  }, [search, category])

  if (loading) return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-2xl font-bold'>Loading...</div>
    </div>
  )

  if (error) return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-2xl font-bold text-red-500'>{error}</div>
    </div>
  )

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Our Products</h1>

      {/* Search & Filter */}
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800'
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800'
        >
          <option value=''>All Categories</option>
          <option value='electronics'>Electronics</option>
          <option value='shoes'>Shoes</option>
          <option value='clothing'>Clothing</option>
        </select>
      </div>

      {/* No results */}
      {products.length === 0 && (
        <div className='text-center text-gray-500 text-xl py-16'>No products found.</div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(product => (
          <div key={product._id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            <img src={product.image} alt={product.name} className='w-full h-56 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
              <p className='text-gray-500 mb-4 text-sm'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-2xl font-bold text-green-600'>${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300'>
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage