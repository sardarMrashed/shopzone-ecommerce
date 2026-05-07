import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24 px-4 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Welcome to ShopZone 🛍️</h1>
        <p className='text-xl mb-8 text-gray-300'>Discover amazing products at great prices</p>
        <Link to='/products' className='bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300'>
          Shop Now →
        </Link>
      </div>

      {/* Features Section */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
            <div className='text-5xl mb-4'>🚚</div>
            <h3 className='text-xl font-bold mb-2'>Free Shipping</h3>
            <p className='text-gray-500'>On all orders over $50</p>
          </div>
          <div className='text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
            <div className='text-5xl mb-4'>🔒</div>
            <h3 className='text-xl font-bold mb-2'>Secure Payment</h3>
            <p className='text-gray-500'>100% secure transactions</p>
          </div>
          <div className='text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
            <div className='text-5xl mb-4'>↩️</div>
            <h3 className='text-xl font-bold mb-2'>Easy Returns</h3>
            <p className='text-gray-500'>30 day return policy</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gray-800 text-white text-center py-16 px-4'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Shop?</h2>
        <p className='text-gray-300 mb-8'>Join thousands of happy customers</p>
        <Link to='/register' className='bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300'>
          Get Started →
        </Link>
      </div>
    </div>
  )
}

export default HomePage