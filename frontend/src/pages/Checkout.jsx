import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (location.state?.orderData) {
            setOrderData(location.state.orderData);
        }
        setLoading(false);
    }, [location.state]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-primary animate-spin">sync</span>
                    <p className="text-on-surface-variant mt-4">Processing...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-32 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <div className="w-24 h-24 bg-tertiary-container rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-6xl text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                        </span>
                    </div>
                    <h1 className="text-4xl font-black font-headline text-primary mb-4">Order Confirmed!</h1>
                    <p className="text-on-surface-variant text-lg">
                        Your order has been placed successfully. We'll notify you once it's on the way.
                    </p>
                </div>

                {orderData && (
                    <div className="bg-surface-container rounded-xl p-6 mb-8">
                        <h2 className="font-headline font-bold text-xl mb-4">Order Details</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Order ID</span>
                                <span className="font-bold">#ORD-{Date.now().toString().slice(-6)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Customer</span>
                                <span className="font-bold">{orderData.customer_name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Phone</span>
                                <span className="font-bold">{orderData.phone}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Total Amount</span>
                                <span className="font-black text-primary text-lg">Rs. {orderData.total}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        to="/" 
                        className="flex-1 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-center"
                    >
                        Continue Shopping
                    </Link>
                    <Link 
                        to="/admin" 
                        className="flex-1 bg-surface-container text-on-surface px-8 py-4 rounded-full font-bold text-center border border-outline/10"
                    >
                        View Orders
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;