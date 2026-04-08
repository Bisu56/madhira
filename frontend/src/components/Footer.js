import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mt-20 border-t border-outline/15 bg-[#0B0D17]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <a className="text-xl font-serif text-primary" href="#">Madhira</a>
                    <p className="text-outline text-sm leading-relaxed uppercase tracking-[0.05em]">
                        Premium late-night delivery for the discerning palate. Licensed and verified.
                    </p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">social_leaderboard</span>
                        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">language</span>
                        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">alternate_email</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h5 className="text-primary font-label text-xs uppercase tracking-widest">Service</h5>
                        <ul className="space-y-3">
                            <li><a className="text-outline hover:text-white transition-colors text-sm uppercase tracking-[0.05em]" href="#">Delivery Areas</a></li>
                            <li><a className="text-outline hover:text-white transition-colors text-sm uppercase tracking-[0.05em]" href="#">Contact Us</a></li>
                            <li><a className="text-outline hover:text-white transition-colors text-sm uppercase tracking-[0.05em]" href="#">Age Verification</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-primary font-label text-xs uppercase tracking-widest">Legal</h5>
                        <ul className="space-y-3">
                            <li><a className="text-outline hover:text-white transition-colors text-sm uppercase tracking-[0.05em]" href="#">Terms of Service</a></li>
                            <li><a className="text-outline hover:text-white transition-colors text-sm uppercase tracking-[0.05em]" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-6">
                    <h5 className="text-primary font-label text-xs uppercase tracking-widest">Newsletter</h5>
                    <p className="text-xs text-outline leading-loose uppercase tracking-wider">Join the inner circle for exclusive midnight drops and tasting events.</p>
                    <div className="flex">
                        <input 
                            className="bg-surface-container-low border-none focus:ring-1 focus:ring-primary text-sm w-full py-3 px-4 rounded-l-lg text-on-surface placeholder:text-outline/50" 
                            placeholder="Email" 
                            type="email"
                        />
                        <button className="liquid-gold text-[#412d00] px-6 py-3 rounded-r-lg font-bold text-xs uppercase">Join</button>
                    </div>
                </div>
            </div>
            <div className="px-12 py-8 border-t border-outline/10 text-center">
                <p className="text-outline text-sm leading-relaxed uppercase tracking-[0.05em]">
                    © 2024 Madhira. Please drink responsibly. 21+ only.
                </p>
            </div>
        </footer>
    );
};

export default Footer;