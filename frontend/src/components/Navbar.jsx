import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartItems } = useCart()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    window.location.href = '/login'
  }

  return (
    <nav style={{ background: '#251e1e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to='/' style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        🛍️ ShopZone
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to='/products' style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to='/cart' style={{ color: 'white', textDecoration: 'none' }}>
          🛒 Cart {cartItems.length > 0 && (
            <span style={{ background: 'red', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem' }}>
              {cartItems.length}
            </span>
          )}
        </Link>
        {userInfo ? (
          <>
            <span style={{ color: 'white' }}>👋 {userInfo.name}</span>
            <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            <Link to='/register' style={{ textDecoration: 'none', background: 'white', color: '#333', padding: '0.5rem 1rem', borderRadius: '8px' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar