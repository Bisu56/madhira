import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const formatCurrency = (value) => {
    if (!value) return 'Rs. 0';
    if (value >= 1000000) return `Rs. ${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `Rs. ${(value / 1000).toFixed(1)}k`;
    return `Rs. ${value}`;
};

const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};

const getStatusColor = (status) => {
    const colors = {
        pending: 'bg-yellow-500/20 text-yellow-700',
        confirmed: 'bg-blue-500/20 text-blue-700',
        preparing: 'bg-orange-500/20 text-orange-700',
        out_for_delivery: 'bg-purple-500/20 text-purple-700',
        delivered: 'bg-green-500/20 text-green-700',
        cancelled: 'bg-red-500/20 text-red-700',
    };
    return colors[status] || 'bg-gray-500/20 text-gray-700';
};

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [dashboard, setDashboard] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const [dashboardRes, ordersRes] = await Promise.all([
                api.get('/admin/dashboard'),
                api.get('/admin/orders')
            ]);
            setDashboard(dashboardRes.data);
            setOrders(ordersRes.data);
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
                    <p className="text-on-surface-variant mt-4">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (!dashboard) {
        return (
            <div className="min-h-screen pt-32 px-6">
                <div className="text-center py-20">
                    <h2 className="text-2xl font-black font-headline mb-4 text-primary">Unable to load dashboard</h2>
                    <button onClick={fetchDashboard} className="text-primary font-bold hover:underline">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black font-headline font-bold text-primary mb-2">Admin Panel</h2>
                    <p className="text-on-surface-variant">Manage your store operations</p>
                </div>
                <div className="flex gap-2 bg-surface-container p-1 rounded-xl">
                    <button 
                        onClick={() => setActiveTab('dashboard')}
                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'dashboard' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                    >
                        Dashboard
                    </button>
                    <button 
                        onClick={() => setActiveTab('orders')}
                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'orders' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                    >
                        All Orders
                    </button>
                    <Link 
                        to="/"
                        className="px-4 py-2 rounded-lg font-bold text-sm text-on-surface-variant hover:text-on-surface flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">storefront</span>
                        View Site
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-lg font-bold text-sm text-error hover:bg-error-container flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">logout</span>
                        Logout
                    </button>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-surface-container-highest p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-primary/10 rotate-12 -mr-8 -mt-8 w-32 h-32 dhaka-pattern"></div>
                    <div className="flex flex-col h-full relative z-10">
                        <div className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Total Revenue</span>
                        <span className="text-3xl font-black text-on-surface font-headline mb-4">{formatCurrency(dashboard.revenue)}</span>
                    </div>
                </div>
                <div className="bg-surface-container p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Total Orders</span>
                        <span className="text-3xl font-black text-on-surface font-headline mb-4">{dashboard.orders || 0}</span>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Customers</span>
                        <span className="text-3xl font-black text-on-surface font-headline mb-4">{dashboard.customers || 0}</span>
                    </div>
                </div>
                <div className="bg-tertiary-container/30 p-6 rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                        </div>
                        <span className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Recent Orders</span>
                        <span className="text-3xl font-black text-on-surface font-headline mb-4">{dashboard.recent_orders?.length || 0}</span>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            {activeTab === 'dashboard' && (
            <div className="bg-surface-container-lowest p-8 rounded-xl">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-headline">Recent Orders</h3>
                    <button 
                        onClick={() => setActiveTab('orders')}
                        className="text-primary font-bold text-sm hover:underline"
                    >
                        View All
                    </button>
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
                                                <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center text-[10px] font-black">
                                                    {order.customer_name?.charAt(0) || 'U'}
                                                </div>
                                                <span className="font-bold">{order.customer_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-on-surface-variant">{order.phone}</td>
                                        <td className="px-6 py-6 font-bold">Rs. {order.total}</td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                                {order.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-on-surface-variant">
                                            {formatDate(order.created_at)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-on-surface-variant">
                                        No orders yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            )}

            {/* All Orders Tab */}
            {activeTab === 'orders' && (
            <div className="bg-surface-container-lowest p-8 rounded-xl">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-headline">All Orders</h3>
                    <button 
                        onClick={() => setActiveTab('dashboard')}
                        className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Dashboard
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-outline text-xs font-bold uppercase tracking-widest bg-surface-container rounded-lg">
                                <th className="px-6 py-4 rounded-l-xl">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Address</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Payment</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 rounded-r-xl">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {orders && orders.length > 0 ? (
                                orders.map(order => (
                                    <tr key={order.id} className="border-t border-outline/10 hover:bg-surface-container/50 transition-colors">
                                        <td className="px-6 py-6 font-bold text-primary">#MDR-{order.id}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center text-[10px] font-black">
                                                    {order.customer_name?.charAt(0) || 'U'}
                                                </div>
                                                <span className="font-bold">{order.customer_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-on-surface-variant">{order.phone}</td>
                                        <td className="px-6 py-6 text-on-surface-variant max-w-[200px] truncate">{order.address}</td>
                                        <td className="px-6 py-6 font-bold">Rs. {order.total}</td>
                                        <td className="px-6 py-6">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface-container text-on-surface-variant">
                                                {order.payment_method || 'cash'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                                {order.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-on-surface-variant">
                                            {formatDate(order.created_at)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-on-surface-variant">
                                        No orders yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </div>
    );
};

export default AdminDashboard;