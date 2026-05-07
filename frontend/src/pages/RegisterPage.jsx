import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
      window.location.href = '/'
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex' style={{ background: '#0a0a0a' }}>
      {/* Left Side */}
      <div className='hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12' style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)', borderRight: '1px solid #D4AF37' }}>
        <div className='text-7xl mb-6'>👑</div>
        <h1 className='text-5xl font-bold mb-4' style={{ color: '#D4AF37' }}>ShopZone</h1>
        <p className='text-center text-lg mb-10' style={{ color: '#888' }}>The ultimate luxury shopping experience</p>
        <div className='space-y-4 w-full max-w-sm'>
          <div className='flex items-center gap-4 p-4 rounded-xl' style={{ border: '1px solid #D4AF37', background: 'rgba(212,175,55,0.05)' }}>
            <span className='text-2xl'>🚚</span>
            <span style={{ color: '#ccc' }}>Free shipping on orders over $50</span>
          </div>
          <div className='flex items-center gap-4 p-4 rounded-xl' style={{ border: '1px solid #D4AF37', background: 'rgba(212,175,55,0.05)' }}>
            <span className='text-2xl'>🔒</span>
            <span style={{ color: '#ccc' }}>100% secure payments</span>
          </div>
          <div className='flex items-center gap-4 p-4 rounded-xl' style={{ border: '1px solid #D4AF37', background: 'rgba(212,175,55,0.05)' }}>
            <span className='text-2xl'>💎</span>
            <span style={{ color: '#ccc' }}>Premium quality products</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8' style={{ background: '#0a0a0a' }}>
        <div className='w-full max-w-md'>
          <h2 className='text-4xl font-bold mb-2' style={{ color: '#D4AF37' }}>Create Account</h2>
          <p className='mb-8' style={{ color: '#888' }}>Join our exclusive membership</p>

          {error && (
            <div className='p-4 rounded-xl mb-6' style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid red', color: 'red' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm font-semibold mb-2' style={{ color: '#D4AF37' }}>Full Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='John Doe'
                className='w-full p-4 rounded-xl focus:outline-none'
                style={{ background: '#1a1a1a', border: '1px solid #333', color: 'white' }}
              />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-2' style={{ color: '#D4AF37' }}>Email Address</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='john@example.com'
                className='w-full p-4 rounded-xl focus:outline-none'
                style={{ background: '#1a1a1a', border: '1px solid #333', color: 'white' }}
              />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-2' style={{ color: '#D4AF37' }}>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Min. 6 characters'
                className='w-full p-4 rounded-xl focus:outline-none'
                style={{ background: '#1a1a1a', border: '1px solid #333', color: 'white' }}
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='w-full py-4 rounded-xl font-bold text-lg transition-all duration-300'
              style={{ background: '#D4AF37', color: '#0a0a0a' }}>
              {loading ? 'Creating Account...' : 'Create Account →'}
            </button>
          </form>

          <p className='text-center mt-6' style={{ color: '#888' }}>
            Already have an account?{' '}
            <Link to='/login' className='font-bold hover:underline' style={{ color: '#D4AF37' }}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage