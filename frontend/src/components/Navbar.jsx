import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const location = useLocation();
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface shadow-[0_12px_32px_rgba(65,41,35,0.08)]">
            <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-primary italic font-headline tracking-tight">Madhira</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <Link 
                    to="/" 
                    className={`font-headline font-bold transition-opacity hover:opacity-80 ${isActive('/') ? 'text-primary' : 'text-on-surface'}`}
                >
                    Home
                </Link>
                <Link 
                    to="/" 
                    className="text-on-surface font-headline transition-opacity hover:opacity-80"
                >
                    Liquor
                </Link>
                <Link 
                    to="/" 
                    className="text-on-surface font-headline transition-opacity hover:opacity-80"
                >
                    Kitchen
                </Link>
                <Link 
                    to="/" 
                    className="text-on-surface font-headline transition-opacity hover:opacity-80"
                >
                    Snacks
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link 
                    to="/cart" 
                    className="p-2 text-primary transition-transform active:scale-95 duration-200 relative"
                >
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-on-primary text-xs font-bold rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </Link>
                <button className="p-2 text-primary transition-transform active:scale-95 duration-200">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <Link to="/admin" className="p-2 text-primary transition-transform active:scale-95 duration-200 hidden md:block">
                    <span className="material-symbols-outlined">admin_panel_settings</span>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;