import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="min-w-[280px] snap-start bg-surface-container-low rounded-xl p-4 transition-transform hover:-translate-y-2">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                    src={product.image || 'https://via.placeholder.com/400x300'} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-black">
                    {product.category?.name || 'Premium'}
                </div>
            </div>
            <h4 className="font-headline font-bold text-xl mb-1">{product.name}</h4>
            <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{product.description || 'Premium quality product'}</p>
            <div className="flex justify-between items-center">
                <span className="text-lg font-black text-primary">Rs. {product.price}</span>
                <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;