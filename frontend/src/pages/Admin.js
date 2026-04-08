import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Admin = () => {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const res = await api.get('/admin/dashboard');
            setDashboard(res.data);
        } catch (error) {
            console.error('Error fetching dashboard:', error);
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-primary animate-spin">sync</span>
                    <p className="text-outline mt-4">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (!dashboard) {
        return (
            <div className="min-h-screen pt-32 px-12">
                <div className="text-center py-20">
                    <h2 className="text-2xl font-serif mb-4">Unable to load dashboard</h2>
                    <button onClick={fetchDashboard} className="text-primary hover:underline">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 px-12 pb-20">
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-primary mb-2">Dashboard</h2>
                    <p className="text-outline">Your overview for the store performance.</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-surface-container px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        Today
                    </div>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-surface-container-highest p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-primary/10 rotate-12 -mr-8 -mt-8 w-32 h-32" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                    <div className="flex flex-col h-full relative z-10">
                        <div className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Total Revenue</span>
                        <span className="text-3xl font-bold text-on-surface font-serif mb-4">₹{dashboard.revenue || 0}</span>
                    </div>
                </div>
                <div className="bg-surface-container p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Total Orders</span>
                        <span className="text-3xl font-bold text-on-surface font-serif mb-4">{dashboard.orders || 0}</span>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Customers</span>
                        <span className="text-3xl font-bold text-on-surface font-serif mb-4">{dashboard.customers || 0}</span>
                    </div>
                </div>
                <div className="bg-secondary-container/30 p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Recent Orders</span>
                        <span className="text-3xl font-bold text-on-surface font-serif mb-4">{dashboard.recent_orders?.length || 0}</span>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-surface-container-lowest p-8 rounded-xl">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-serif">Recent Orders</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-outline text-xs font-bold uppercase tracking-widest bg-surface-container rounded-lg">
                                <th className="px-6 py-4 rounded-l-xl">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 rounded-r-xl">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {dashboard.recent_orders && dashboard.recent_orders.length > 0 ? (
                                dashboard.recent_orders.map(order => (
                                    <tr key={order.id} className="border-t border-outline/10 hover:bg-surface-container/50 transition-colors">
                                        <td className="px-6 py-6 font-bold text-primary">#MDR-{order.id}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center text-[10px] font-bold">
                                                    {order.customer_name?.charAt(0) || 'U'}
                                                </div>
                                                <span className="font-bold">{order.customer_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-outline">{order.phone}</td>
                                        <td className="px-6 py-6 font-bold">₹{order.total}</td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                order.status === 'pending' 
                                                ? 'bg-yellow-500/20 text-yellow-500' 
                                                : order.status === 'completed'
                                                ? 'bg-green-500/20 text-green-500'
                                                : 'bg-blue-500/20 text-blue-500'
                                            }`}>
                                                {order.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-outline">
                                            {new Date(order.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-outline">
                                        No orders yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;