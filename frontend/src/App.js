import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary animate-spin">sync</span>
            </div>
        );
    }
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
};

const StoreLayout = ({ children }) => (
    <>
        <Navbar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </>
);

const AuthLayout = ({ children }) => (
    <main className="flex-1">
        {children}
    </main>
);

function AppRoutes() {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

    return (
        <div className="min-h-screen flex flex-col bg-surface">
            {isAdminPage ? (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/admin" 
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            ) : (
                <StoreLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/login" element={<Navigate to="/" replace />} />
                    </Routes>
                </StoreLayout>
            )}
        </div>
    );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
            <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
