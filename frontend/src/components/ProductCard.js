import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-lowest">
                <img 
                    src={product.image || 'https://via.placeholder.com/400x500'} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-lighten transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-surface-container-highest/60 backdrop-blur-md text-[10px] text-primary px-2.5 py-1 rounded-lg border border-primary/20 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span>
                        21+ MANDATORY
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-label uppercase tracking-widest text-[10px] text-outline">{product.category?.name || 'Premium'}</span>
                    <span className="font-serif text-primary text-xl">₹{product.price}</span>
                </div>
                <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex gap-3">
                    <button 
                        onClick={() => addToCart(product)}
                        className="flex-1 liquid-gold py-3 rounded-lg text-[#412d00] font-bold text-xs uppercase tracking-widest scale-100 active:scale-95 transition-transform"
                    >
                        Add to Cart
                    </button>
                    <button className="p-3 bg-surface-container-highest rounded-lg text-outline hover:text-white transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;