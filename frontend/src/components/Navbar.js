import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Madhira Store</Link>
                <div className="flex gap-4">
                    <Link to="/" className="hover:text-blue-200">Home</Link>
                    <Link to="/cart" className="hover:text-blue-200">
                        Cart ({cartCount})
                    </Link>
                    <Link to="/admin" className="hover:text-blue-200">Admin</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;