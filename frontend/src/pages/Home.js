import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        const res = await api.get('/products');
        setProducts(res.data);
    };

    const fetchCategories = async () => {
        const res = await api.get('/categories');
        setCategories(res.data);
    };

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category_id === selectedCategory)
        : products;

    return (
        <div className="container mx-auto p-4">
            <div className="mb-6">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`mr-2 px-3 py-1 rounded ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`mr-2 px-3 py-1 rounded ${selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;