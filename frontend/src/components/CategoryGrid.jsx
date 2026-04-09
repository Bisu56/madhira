import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ categories = [] }) => {
    if (categories.length === 0) return null;

    const getGridClass = (index) => {
        const patterns = [
            'md:col-span-7',
            'md:col-span-5', 
            'md:col-span-12'
        ];
        return patterns[index % patterns.length];
    };

    const getHeightClass = (index) => {
        const heights = ['', '', 'h-64 md:h-auto'];
        return heights[index % heights.length];
    };

    return (
        <section className="px-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                {categories.map((category, index) => (
                    <div 
                        key={category.id} 
                        className={`${getGridClass(index)} relative group overflow-hidden rounded-xl bg-surface-container-high transition-all ${getHeightClass(index)}`}
                    >
                        {category.image && (
                            <img 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                src={category.image} 
                                alt={category.name}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-4xl font-black text-white font-headline italic mb-2">
                                {category.name}
                            </h3>
                            {category.description && (
                                <p className="text-white/80 mb-6 font-medium">{category.description}</p>
                            )}
                            <Link 
                                to={`/category/${category.id}`} 
                                className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold flex items-center gap-2"
                            >
                                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
