import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import TrendingProducts from '../components/TrendingProducts';
import OffersBanner from '../components/OffersBanner';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [productsRes, categoriesRes, offersRes] = await Promise.all([
                api.get('/products'),
                api.get('/categories'),
                api.get('/offers')
            ]);
            setProducts(productsRes.data);
            setCategories(categoriesRes.data);
            setOffers(offersRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const featuredProducts = products.filter(p => p.is_featured);
    const allProducts = products;

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
        <div className="min-h-screen pt-24 pb-32">
            <HeroSection />

            <CategoryGrid categories={categories} />

            <TrendingProducts 
                products={featuredProducts.length > 0 ? featuredProducts : products} 
                title="Mela Favorites" 
                link="/"
            />

            <OffersBanner offers={offers} />

            <section className="px-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-black font-headline text-primary">All Products</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
