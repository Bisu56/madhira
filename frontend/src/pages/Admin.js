import React, { useState, useEffect } from 'react';
import api from '../api';

const Admin = () => {
    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        const res = await api.get('/admin/dashboard');
        setDashboard(res.data);
    };

    if (!dashboard) return <div className="container mx-auto p-4">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded">
                    <p className="text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold">₹{dashboard.revenue}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                    <p className="text-gray-600">Orders</p>
                    <p className="text-2xl font-bold">{dashboard.orders}</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded">
                    <p className="text-gray-600">Customers</p>
                    <p className="text-2xl font-bold">{dashboard.customers}</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Recent Orders</h3>
            <div className="bg-white rounded shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">ID</th>
                            <th className="p-3 text-left">Customer</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Total</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboard.recent_orders.map(order => (
                            <tr key={order.id} className="border-t">
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.customer_name}</td>
                                <td className="p-3">{order.phone}</td>
                                <td className="p-3">₹{order.total}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded text-sm ${
                                        order.status === 'pending' ? 'bg-yellow-200' : 'bg-green-200'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;