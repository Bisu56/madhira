import React from 'react';
import { Link } from 'react-router-dom';

const OffersBanner = ({ offers = [] }) => {
    const activeOffer = offers.find(o => o.is_active) || {
        title: "The Festive Weekend Offer",
        description: "Get flat 20% off on all Kitchen orders above Rs. 1500. Use code: MELA20",
        code: "MELA20",
        image: null
    };

    return (
        <section className="px-6 mb-16">
            <div className="bg-surface-container-highest rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-4 border-dashed border-outline-variant/30">
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-3xl md:text-4xl font-black font-headline text-on-surface mb-4">
                        {activeOffer.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg mb-6">
                        {activeOffer.description}
                        {activeOffer.code && (
                            <span className="font-bold text-primary ml-2">({activeOffer.code})</span>
                        )}
                    </p>
                    <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-lg">
                        Claim Offer
                    </button>
                </div>
                <div className="w-48 h-48 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="material-symbols-outlined text-8xl text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                        celebration
                    </span>
                </div>
            </div>
        </section>
    );
};

export default OffersBanner;
