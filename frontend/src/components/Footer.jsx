import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full pt-12 pb-32 px-6 bg-[#ffede9]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <div>
                    <span className="text-2xl font-black font-headline text-primary italic block mb-4">Madhira</span>
                    <p className="text-on-surface font-body mb-6 max-w-xs">Elevating your late-night experiences with the spirit of the Mela.</p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-xl">thumb_up</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-headline font-bold text-primary mb-4">Explore</h5>
                        <ul className="space-y-2 text-sm text-on-surface font-body">
                            <li><Link to="/category/1" className="hover:text-tertiary transition-colors">Liquor Store</Link></li>
                            <li><Link to="/category/2" className="hover:text-tertiary transition-colors">Kitchen Specials</Link></li>
                            <li><Link to="/" className="hover:text-tertiary transition-colors">Bulk Orders</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-headline font-bold text-primary mb-4">Help</h5>
                        <ul className="space-y-2 text-sm text-on-surface font-body">
                            <li><button className="hover:text-tertiary transition-colors">Privacy</button></li>
                            <li><button className="hover:text-tertiary transition-colors">Terms</button></li>
                            <li><button className="hover:text-tertiary transition-colors">Support</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center text-xs text-on-surface/60 font-label">
                © 2024 Madhira. The Modern Mela Experience.
            </div>
        </footer>
    );
};

export default Footer;
