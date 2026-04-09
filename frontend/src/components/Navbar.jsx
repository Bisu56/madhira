import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const location = useLocation();
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const isStorePage = !location.pathname.startsWith('/admin') && location.pathname !== '/login';

    if (!isStorePage) return null;

    return (
        <>
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
                        to="/category/1" 
                        className={`font-headline font-bold transition-opacity hover:opacity-80 ${isActive('/category/1') ? 'text-primary' : 'text-on-surface'}`}
                    >
                        Liquor
                    </Link>
                    <Link 
                        to="/category/2" 
                        className={`font-headline font-bold transition-opacity hover:opacity-80 ${isActive('/category/2') ? 'text-primary' : 'text-on-surface'}`}
                    >
                        Kitchen
                    </Link>
                    <Link 
                        to="/category/3" 
                        className={`font-headline font-bold transition-opacity hover:opacity-80 ${isActive('/category/3') ? 'text-primary' : 'text-on-surface'}`}
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
                    <button 
                        className="md:hidden p-2 text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                    <Link to="/admin" className="p-2 text-primary transition-transform active:scale-95 duration-200 hidden md:block">
                        <span className="material-symbols-outlined">admin_panel_settings</span>
                    </Link>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="fixed top-[73px] left-0 w-full bg-surface z-40 shadow-lg md:hidden">
                    <div className="p-4 space-y-2">
                        <Link to="/" className="block py-3 px-4 font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/category/1" className="block py-3 px-4 font-bold" onClick={() => setMobileMenuOpen(false)}>Liquor</Link>
                        <Link to="/category/2" className="block py-3 px-4 font-bold" onClick={() => setMobileMenuOpen(false)}>Kitchen</Link>
                        <Link to="/category/3" className="block py-3 px-4 font-bold" onClick={() => setMobileMenuOpen(false)}>Snacks</Link>
                    </div>
                </div>
            )}

            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface/80 backdrop-blur-xl shadow-[0_-8px_30px_rgba(65,41,35,0.1)] md:hidden">
                <Link 
                    to="/" 
                    className={`flex flex-col items-center justify-center ${isActive('/') ? 'bg-surface-container text-primary' : 'text-on-surface-variant opacity-60'} rounded-full px-6 py-2 transition-transform hover:scale-110`}
                >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home_app_logo</span>
                    <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Home</span>
                </Link>
                <Link 
                    to="/category/1" 
                    className={`flex flex-col items-center justify-center ${isActive('/category/1') ? 'bg-surface-container text-primary' : 'text-on-surface-variant opacity-60'} transition-transform hover:scale-110`}
                >
                    <span className="material-symbols-outlined">wine_bar</span>
                    <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Liquor</span>
                </Link>
                <Link 
                    to="/category/2" 
                    className={`flex flex-col items-center justify-center ${isActive('/category/2') ? 'bg-surface-container text-primary' : 'text-on-surface-variant opacity-60'} transition-transform hover:scale-110`}
                >
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Kitchen</span>
                </Link>
                <Link 
                    to="/category/3" 
                    className={`flex flex-col items-center justify-center ${isActive('/category/3') ? 'bg-surface-container text-primary' : 'text-on-surface-variant opacity-60'} transition-transform hover:scale-110`}
                >
                    <span className="material-symbols-outlined">cookie</span>
                    <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Snacks</span>
                </Link>
            </nav>

            <Link 
                to="/cart" 
                className="fixed bottom-24 right-6 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-40 md:bottom-12 hover:scale-105 transition-transform"
            >
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
            </Link>
        </>
    );
};

export default Navbar;
