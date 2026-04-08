import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { cart } = useCart();

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await api.get('/products');
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await api.get('/categories');
            setCategories(res.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category_id === selectedCategory)
        : products;

    const featuredProducts = products.slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center px-12 overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover opacity-40" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RAU_jntLM0Gv1efh9ZxkSgeMTRNPjITEMQU3sAusDidKfHc48Ad_XDAXj_llBhH_tlE08v7-TaM1pN6pkdJ3yVrdunRmG6dFETlu6tIBzvfDG7j22wLBDACMfXSnfJJQcORnDPGAfnWQbnfGm5p2LKkBDL8oCIj9gveRClF3OpM09nxNYDioTuovokUi6izfK4ebCW--ADJ3IfVDAhNQlAXY1LeXtpCAzFQRnQO6gFKeiB8-dH1stI4kS1RCONkfzu9eDRbH_K4S" 
                        alt="moody high-end cocktail bar"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 text-secondary border border-secondary/20 text-xs font-label tracking-widest uppercase mb-6">Open Until 4:00 AM</span>
                    <h1 className="text-7xl md:text-8xl font-serif font-bold text-on-surface leading-tight tracking-tighter mb-8">
                        Late Night <br/>
                        <span className="text-primary italic">Essentials</span> <br/>
                        Delivered.
                    </h1>
                    <p className="text-xl text-outline max-w-xl leading-relaxed mb-10 font-body">
                        The city sleeps, but your cravings don't. Curated spirits, gourmet snacks, and daily essentials delivered to your door in under 30 minutes.
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="liquid-gold text-[#412d00] font-semibold px-10 py-5 rounded-xl text-lg shadow-2xl hover:scale-105 transition-transform">
                            Explore Collection
                        </button>
                        <Link to="/cart" className="group flex items-center gap-3 text-secondary font-medium tracking-wide">
                            <span>View Cart</span>
                            <span className="w-12 h-[1px] bg-secondary group-hover:w-16 transition-all"></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fast Delivery Value Prop */}
            <section className="py-12 bg-surface-container-low">
                <div className="max-w-[1920px] mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex items-center gap-6 p-8 rounded-xl bg-surface-container/50 border border-outline/5">
                        <div className="w-16 h-16 rounded-full liquid-gold flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#412d00] text-3xl">bolt</span>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-on-surface">30-Min Arrival</h3>
                            <p className="text-sm text-outline">Average delivery time in urban zones.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-xl bg-surface-container/50 border border-outline/5">
                        <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-on-surface">Premium Curation</h3>
                            <p className="text-sm text-outline">Only the finest labels and artisan snacks.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-xl bg-surface-container/50 border border-outline/5">
                        <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center">
                            <span className="material-symbols-outlined text-secondary text-3xl">ac_unit</span>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-on-surface">Chilled Delivery</h3>
                            <p className="text-sm text-outline">Arrives at the perfect temperature.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 px-12 max-w-[1920px] mx-auto">
                <div className="mb-8">
                    <span className="text-primary font-label tracking-[0.2em] uppercase text-xs">Browse</span>
                    <h2 className="text-4xl font-serif mt-2">Our Collection</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-8 py-3 rounded-full whitespace-nowrap font-medium transition-all ${
                            !selectedCategory 
                            ? 'bg-secondary-container text-on-secondary-container border border-secondary/20 shadow-[0_0_15px_rgba(0,68,205,0.3)]' 
                            : 'bg-surface-container text-on-surface-variant border border-outline/10 hover:bg-surface-container-high'
                        }`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-8 py-3 rounded-full whitespace-nowrap font-medium transition-all ${
                                selectedCategory === cat.id
                                ? 'bg-secondary-container text-on-secondary-container border border-secondary/20 shadow-[0_0_15px_rgba(0,68,205,0.3)]' 
                                : 'bg-surface-container text-on-surface-variant border border-outline/10 hover:bg-surface-container-high'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Featured Liquor Cabinet */}
            {featuredProducts.length > 0 && (
                <section className="py-12 px-12 max-w-[1920px] mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <span className="text-primary font-label tracking-[0.2em] uppercase text-xs">Connoisseur's Choice</span>
                            <h2 className="text-4xl font-serif mt-2">Liquor Cabinet</h2>
                        </div>
                        <button className="text-secondary flex items-center gap-2 hover:gap-4 transition-all">
                            View Full Cellar <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            )}

            {/* All Products */}
            <section className="py-12 px-12 max-w-[1920px] mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif">All Products</h2>
                </div>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-outline">inventory_2</span>
                        <p className="text-xl text-outline mt-4">No products available</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;