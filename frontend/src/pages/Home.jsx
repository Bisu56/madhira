import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [productsRes, categoriesRes] = await Promise.all([
                api.get('/products'),
                api.get('/categories')
            ]);
            setProducts(productsRes.data);
            setCategories(categoriesRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const getCategoryProducts = (categoryId) => {
        return products.filter(p => p.category_id === categoryId).slice(0, 4);
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
        <div className="min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="px-6 mb-12">
                <div className="relative overflow-hidden rounded-xl bg-primary min-h-[480px] flex flex-col justify-end p-8 md:p-16 dhaka-pattern">
                    <img 
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2gnyGmt4MlMij_Yt0OJCybk968sL5GwKPsADribqkrpATvqaTegXMye_wfFtJD017DW_u0AZ940J3hDEagPYmQl3ce7vD8jptKxxwM5i3WZ4Ih0FDdDBQyLVyhRhp62idIdNnLRl4p1v7LXn9vlZBnMmiYWzZAFg5WIbnGeEYe46l98dlAqZPey5syVnIIkrOQVJ2nqJB_QL-YG6BH_HrMAYrDzzmlKw9pmtp_4J2Mxg0jnr_YzjWA59vBy-N0C5xv-SFZyFy_Rkl" 
                        alt="Vibrant night market"
                    />
                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4">Late Night Mela</span>
                        <h1 className="text-5xl md:text-7xl font-black text-on-primary font-headline leading-[0.9] tracking-tighter mb-6">
                            Fuel Your <br/><span className="text-secondary-fixed">Late Night</span> Revelry
                        </h1>
                        <p className="text-lg md:text-xl text-on-primary/90 max-w-lg mb-8 leading-relaxed">
                            From the finest spirits to sizzling street flavors, the Mela comes to your doorstep. Every order is a celebration.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/cart" className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                                Start the Party
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Bento Grid */}
            <section className="px-6 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                    {/* Liquor Category */}
                    {categories[0] && (
                        <div className="md:col-span-7 relative group overflow-hidden rounded-xl bg-surface-container-high transition-all">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjd0zwLmkmtOfgFVAYMxk-WXOCvYIj3MuxBluiARgEe6NA6JLCrMOAH4HNiwsBFvd1xGJHjihyY5LEk5VXZI_h3OkJ3ONMqqjz9C14md0OYfm8LPPz2byJcQG5hPtccl-XLLn8v22X77i9vHXhZhgg1pjlPUMwMoCe9_fLfGhFm6EFFAZ4Ar_tPyyOOE3WpzhHdT4iIiXUNnzBz5xcXbnCsP3uTNwSc1GeMSafGn6EMAdS9W6lo5NDBCRV2A_5U_CLhJBjaMHqhlAE" 
                                alt="Elegant bar counter"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-4xl font-black text-white font-headline italic mb-2">{categories[0].name}</h3>
                                <p className="text-white/80 mb-6 font-medium">Curated spirits, craft beers, and fine wines.</p>
                                <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold flex items-center gap-2">
                                    Explore Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Kitchen Category */}
                    {categories[1] && (
                        <div className="md:col-span-5 relative group overflow-hidden rounded-xl bg-tertiary-container transition-all">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfymxVW8FQQcqHqORGPY39fctEe1AQHwsaKoZqLfQG9eCDYBDmPqWXY1dhl_qjFLMAiiPd9H-r-gaWdUw4PR7d5hk2JcqTI4_HzlpW4A2ffMDszOoPy2KjOBKeFVfrun3psgpjXGF6gYtbGMtv-DB0aihFE-8l7vJ8Q0_52C7ScnZleTXbceJIRWmzWhffDb1jtYWFsl9nmF26lxuljKLoFFmGz9X5vPAKU90BASVej7FO9ZPp9bjd7PzZW8OmVjFwGoBOv1apjzau" 
                                alt="Steaming hot momos"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-3xl font-black text-white font-headline italic mb-2">{categories[1].name}</h3>
                                <p className="text-white/80 mb-4 font-medium">Authentic flavors from the heart of the mela.</p>
                                <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-full font-bold">Order Now</button>
                            </div>
                        </div>
                    )}

                    {/* Snacks Category */}
                    {categories[2] && (
                        <div className="md:col-span-12 relative group overflow-hidden rounded-xl bg-secondary-container h-64 md:h-auto transition-all">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg55jh98Q3lBkwPOyTLdC4qNycVBtXmbqWmwE-gop3Tb-84I8cGap4lXiS2CsmNqDmwc4DpwEtZHkYAiQToIeH5y2IGASNOvsR1yg1bU4_5uE-BpBjcveNz4A3nJN94T4sQZWqJGXb98WhNYhOL9qMDPDXVhwaY7NN8a_lS5_Pk7HaLEE9aBa630d0i6OJbOAxHuPIBo7bdSIyFyMRU3akQIt1OgkG3UfgVmRgftuKF3oJazreiI3LfVVYfpwqR6fGLAscJLgshr4q" 
                                alt="Assorted bar snacks"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
                                <h3 className="text-4xl font-black text-white font-headline italic mb-2">{categories[2].name} & Chakhna</h3>
                                <p className="text-white/80 max-w-sm mb-6">The perfect crunch for every sip and story.</p>
                                <div className="flex gap-4">
                                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Spicy</span>
                                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Savory</span>
                                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Crunchy</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Mela Favorites Section */}
            <section className="px-6 mb-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-4xl font-black font-headline text-primary tracking-tight">Mela Favorites</h2>
                        <p className="text-on-surface-variant">What everyone is vibing with tonight</p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary-container pb-1">
                        See All <span className="material-symbols-outlined">trending_flat</span>
                    </button>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                    {products.length > 0 ? (
                        products.slice(0, 6).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="text-center py-12 text-on-surface-variant">
                            <p>No products available</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="px-6 mb-16">
                <div className="bg-surface-container-highest rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-4 border-dashed border-outline-variant/30">
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl md:text-4xl font-black font-headline text-on-surface mb-4">The Festive Weekend Offer</h2>
                        <p className="text-on-surface-variant text-lg mb-6">Get flat 20% off on all Kitchen orders above Rs. 1500. Use code: <span className="font-bold text-primary">MELA20</span></p>
                        <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-lg">Claim Offer</button>
                    </div>
                    <div className="w-48 h-48 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center relative overflow-hidden">
                        <span className="material-symbols-outlined text-8xl text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
                    </div>
                </div>
            </section>

            {/* All Products Grid */}
            <section className="px-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-black font-headline text-primary">All Products</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;