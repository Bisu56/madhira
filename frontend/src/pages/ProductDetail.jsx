import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../services/api';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await api.get(`/products/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
        setLoading(false);
    };

    const handleAddToCart = () => {
        addToCart({ ...product, qty: quantity });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-primary animate-spin">sync</span>
                    <p className="text-on-surface-variant mt-4">Loading...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-black font-headline mb-4">Product Not Found</h2>
                    <Link to="/" className="text-primary font-bold">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="text-primary font-bold flex items-center gap-2 mb-8">
                    <span className="material-symbols-outlined">arrow_back</span> Back to Shopping
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="rounded-2xl overflow-hidden bg-surface-container-high">
                        <img 
                            src={product.image || 'https://via.placeholder.com/600x600'} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 w-fit">
                            {product.category?.name || 'Premium'}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black font-headline text-primary mb-4">
                            {product.name}
                        </h1>
                        <p className="text-on-surface-variant text-lg mb-6">
                            {product.description || 'Premium quality product from Madhira'}
                        </p>
                        <div className="text-3xl font-black text-primary mb-8">
                            Rs. {product.price}
                        </div>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center bg-surface-container rounded-full">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-12 h-12 flex items-center justify-center text-primary font-bold"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-bold">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-12 h-12 flex items-center justify-center text-primary font-bold"
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className={`flex-1 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-[1.02] ${added ? 'bg-tertiary' : ''}`}
                            >
                                {added ? 'Added to Cart!' : 'Add to Cart'}
                            </button>
                        </div>

                        <div className="bg-surface-container rounded-xl p-6">
                            <h3 className="font-headline font-bold text-lg mb-4">Product Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-on-surface-variant">Category</span>
                                    <span className="font-bold">{product.category?.name || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-on-surface-variant">Availability</span>
                                    <span className="font-bold text-tertiary">In Stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
