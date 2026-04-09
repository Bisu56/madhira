import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, ctaText, ctaLink, image }) => {
    return (
        <section className="px-6 mb-12">
            <div className="relative overflow-hidden rounded-xl bg-primary min-h-[480px] flex flex-col justify-end p-8 md:p-16 dhaka-pattern">
                {image && (
                    <img 
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" 
                        src={image} 
                        alt="Hero background"
                    />
                )}
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-black text-on-primary font-headline leading-[0.9] tracking-tighter mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-on-primary/90 max-w-lg mb-8 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                    {ctaText && ctaLink && (
                        <Link 
                            to={ctaLink} 
                            className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform inline-block"
                        >
                            {ctaText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
