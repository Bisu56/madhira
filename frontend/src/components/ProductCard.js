import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={product.image || 'https://via.placeholder.com/200'}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-blue-600 font-bold">₹{product.price}</span>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;