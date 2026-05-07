import PrivateRoute from './components/PrivateRoute';

// Your routes should look like this:
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

  {/* Protected */}
  <Route path="/cart" element={
    <PrivateRoute>
      <CartPage />
    </PrivateRoute>
  } />
  <Route path="/profile" element={
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  } />
</Routes>