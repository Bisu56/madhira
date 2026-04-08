import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between px-12 py-6 max-w-[1920px] mx-auto">
                <div className="flex items-center gap-12">
                    <Link to="/" className="text-3xl font-serif italic text-primary tracking-tighter">Madhira</Link>
                    <div className="hidden md:flex items-center gap-8 font-serif tracking-tight">
                        <Link to="/" className="text-primary border-b-2 border-primary pb-1">Liquor</Link>
                        <Link to="/" className="text-outline hover:text-white transition-colors">Kitchen</Link>
                        <Link to="/" className="text-outline hover:text-white transition-colors">Snacks</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center bg-surface-container-highest/30 rounded-full px-4 py-2 border border-outline/10">
                        <span className="material-symbols-outlined text-outline text-sm">search</span>
                        <input 
                            className="bg-transparent border-none focus:ring-0 text-sm w-64 text-on-surface placeholder:text-outline/50" 
                            placeholder="Search spirits, snacks..." 
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-primary hover:bg-white/5 rounded-full transition-all duration-300 scale-105 active:scale-95">
                            <span className="material-symbols-outlined">location_on</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-white/5 rounded-full transition-all duration-300 scale-105 active:scale-95 relative">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_#b6c4ff]"></span>
                            )}
                        </button>
                        <button className="p-2 text-primary hover:bg-white/5 rounded-full transition-all duration-300 scale-105 active:scale-95">
                            <span className="material-symbols-outlined">person</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;