import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ProfilePage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
      return
    }
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
      const { data } = await axios.put(
        'http://localhost:5000/api/auth/profile',
        { name, email, password },
        config
      )
      localStorage.setItem('userInfo', JSON.stringify(data))
      setMessage('Profile updated successfully!')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="border border-yellow-600 rounded-2xl p-8"
          style={{ background: 'linear-gradient(145deg, #111 0%, #1a1a1a 100%)' }}>

          <h2 className="text-3xl font-bold text-center mb-2"
            style={{ color: '#FFD700' }}>My Profile</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Update your account details</p>

          {message && (
            <div className="mb-4 p-3 rounded-lg text-center text-sm font-medium"
              style={{ background: '#14532d', color: '#86efac' }}>
              {message}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 rounded-lg text-center text-sm font-medium"
              style={{ background: '#450a0a', color: '#fca5a5' }}>
              {error}
            </div>
          )}

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-sm mb-1" style={{ color: '#FFD700' }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black border text-white outline-none focus:border-yellow-500 transition"
                style={{ borderColor: '#7a6a00' }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1" style={{ color: '#FFD700' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black border text-white outline-none focus:border-yellow-500 transition"
                style={{ borderColor: '#7a6a00' }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1" style={{ color: '#FFD700' }}>New Password</label>
              <input
                type="password"
                placeholder="Leave blank to keep current"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black border text-white outline-none focus:border-yellow-500 transition"
                style={{ borderColor: '#7a6a00' }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1" style={{ color: '#FFD700' }}>Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black border text-white outline-none focus:border-yellow-500 transition"
                style={{ borderColor: '#7a6a00' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold text-black transition hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #FFD700, #b8860b)' }}
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage