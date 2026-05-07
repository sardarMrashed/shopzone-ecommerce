import { useState } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')

  const handlePlaceOrder = async () => {
    if (!address) {
      setError('Please enter your shipping address')
      return
    }
    try {
      setLoading(true)
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      await axios.post(
        'http://localhost:5000/api/orders',
        {
          orderItems: cartItems,
          shippingAddress: { address },
          totalPrice
        },
        {
          headers: { Authorization: `Bearer ${userInfo?.token}` }
        }
      )
      setSuccess(true)
      setLoading(false)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
      setLoading(false)
    }
  }

  if (success) return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-6xl mb-4'>🎉</div>
      <h1 className='text-3xl font-bold mb-4'>Order Placed Successfully!</h1>
      <p className='text-gray-500 mb-8'>Thank you for your order!</p>
      <Link to='/products' className='bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-600 transition-colors duration-300'>
        Continue Shopping
      </Link>
    </div>
  )

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Shopping Cart 🛒</h1>
      {cartItems.length === 0 ? (
        <div className='text-center py-16'>
          <div className='text-6xl mb-4'>🛒</div>
          <p className='text-xl text-gray-500 mb-4'>Your cart is empty!</p>
          <Link to='/products' className='bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-600 transition-colors duration-300'>
            Shop Now
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            {cartItems.map(item => (
              <div key={item._id} className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md mb-4'>
                <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-lg' />
                <div className='flex-1'>
                  <h3 className='font-bold text-lg'>{item.name}</h3>
                  <p className='text-gray-500'>Qty: {item.quantity}</p>
                  <p className='text-green-600 font-bold'>${item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300'>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md h-fit'>
            <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
            <div className='flex justify-between mb-4'>
              <span>Total</span>
              <span className='font-bold text-green-600'>${totalPrice}</span>
            </div>
            {error && <p className='text-red-500 mb-4'>{error}</p>}
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Shipping address'
              className='w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400'
            />
            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className='w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300'>
              {loading ? 'Placing Order...' : 'Place Order 🎉'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage