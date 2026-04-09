import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ 
    title = "Fuel Your Late Night Revelry",
    subtitle = "From the finest spirits to sizzling street flavors, the Mela comes to your doorstep.",
    ctaText = "Start the Party",
    ctaLink = "/cart",
    image = "https://lh3.googleusercontent.com/aida-public/AB6AXuB2gnyGmt4MlMij_Yt0OJCybk968sL5GwKPsADribqkrpATvqaTegXMye_wfFtJD017DW_u0AZ940J3hDEagPYmQl3ce7vD8jptKxxwM5i3WZ4Ih0FDdDBQyLVyhRhp62idIdNnLRl4p1v7LXn9vlZBnMmiYWzZAFg5WIbnGeEYe46l98dlAqZPey5syVnIIkrOQVJ2nqJB_QL-YG6BH_HrMAYrDzzmlKw9pmtp_4J2Mxg0jnr_YzjWA59vBy-N0C5xv-SFZyFy_Rkl",
    badge = "Late Night Mela"
}) => {
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
                    {badge && (
                        <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                            {badge}
                        </span>
                    )}
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
                            className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                        >
                            {ctaText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
