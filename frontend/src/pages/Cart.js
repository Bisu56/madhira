import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import api from '../api';

const Cart = () => {
    const { cart, removeFromCart, clearCart, total } = useCart();
    const [formData, setFormData] = useState({ customer_name: '', phone: '', address: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/orders', {
                customer_name: formData.customer_name,
                phone: formData.phone,
                address: formData.address,
                total: total,
                items: cart.map(item => ({ id: item.id, qty: item.qty, price: item.price }))
            });
            setMessage('Order placed successfully!');
            clearCart();
            setFormData({ customer_name: '', phone: '', address: '' });
        } catch (err) {
            setMessage('Error placing order. Please try again.');
        }
        setLoading(false);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-12">
                <div className="max-w-2xl mx-auto text-center py-20">
                    <span className="material-symbols-outlined text-8xl text-outline">shopping_cart</span>
                    <h2 className="text-4xl font-serif mt-8 mb-4">Your Cart is Empty</h2>
                    <p className="text-outline text-lg mb-8">Add some premium spirits or snacks to get started.</p>
                    <button className="liquid-gold text-[#412d00] font-semibold px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform">
                        Browse Collection
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 px-12 pb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif mb-12">Your Selection</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-6 p-6 bg-surface-container-low rounded-xl border border-outline/5">
                                <div className="w-32 h-40 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                                    <img 
                                        src={item.image || 'https://via.placeholder.com/128x160'} 
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-serif text-xl text-on-surface mb-2">{item.name}</h3>
                                        <p className="text-outline text-sm">{item.category?.name || 'Premium'}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-outline">Qty: {item.qty}</span>
                                        </div>
                                        <span className="font-serif text-primary text-xl">₹{item.price * item.qty}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-outline hover:text-red-500 transition-colors self-start"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-surface-container rounded-xl p-8 sticky top-32">
                            <h3 className="font-serif text-2xl mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span className="text-outline">{item.name} x {item.qty}</span>
                                        <span className="text-on-surface">₹{item.price * item.qty}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="border-t border-outline/10 pt-4 mb-6">
                                <div className="flex justify-between text-xl font-serif">
                                    <span>Total</span>
                                    <span className="text-primary">₹{total}</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-surface-container-high border border-outline/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none"
                                    value={formData.customer_name}
                                    onChange={e => setFormData({...formData, customer_name: e.target.value})}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-surface-container-high border border-outline/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    required
                                />
                                <textarea
                                    placeholder="Delivery Address"
                                    rows={3}
                                    className="w-full bg-surface-container-high border border-outline/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none resize-none"
                                    value={formData.address}
                                    onChange={e => setFormData({...formData, address: e.target.value})}
                                    required
                                />
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full liquid-gold text-[#412d00] font-bold py-4 rounded-xl text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </button>
                            </form>
                            {message && (
                                <p className={`mt-4 text-center ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;