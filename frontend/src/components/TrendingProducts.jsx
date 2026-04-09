import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const TrendingProducts = ({ products = [], title = "Trending", link = "/" }) => {
    if (products.length === 0) return null;

    return (
        <section className="px-6 mb-16">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-black font-headline text-primary tracking-tight">{title}</h2>
                    <p className="text-on-surface-variant">What everyone's vibing with tonight</p>
                </div>
                <Link to={link} className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary-container pb-1">
                    See All <span className="material-symbols-outlined">trending_flat</span>
                </Link>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                {products.slice(0, 6).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default TrendingProducts;
