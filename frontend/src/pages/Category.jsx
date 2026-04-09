import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const [categoryRes, productsRes] = await Promise.all([
                api.get(`/categories/${id}`),
                api.get(`/products/category/${id}`)
            ]);
            setCategory(categoryRes.data);
            setProducts(productsRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
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

    return (
        <div className="min-h-screen pt-32 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link to="/" className="text-primary font-bold flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black font-headline text-primary">
                        {category?.name || 'Category'}
                    </h1>
                    <p className="text-on-surface-variant text-lg mt-2">
                        {products.length} products available
                    </p>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-8xl text-outline">inventory_2</span>
                        <h2 className="text-2xl font-black font-headline mt-8 mb-4">No Products Found</h2>
                        <p className="text-on-surface-variant mb-8">Check back later for new arrivals</p>
                        <Link to="/" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold">
                            Browse All Products
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
