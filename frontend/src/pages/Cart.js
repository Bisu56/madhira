import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import api from '../api';

const Cart = () => {
    const { cart, removeFromCart, clearCart, total } = useCart();
    const [formData, setFormData] = useState({ customer_name: '', phone: '', address: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        } catch (err) {
            setMessage('Error placing order');
        }
    };

    if (cart.length === 0) {
        return <div className="container mx-auto p-4">Cart is empty</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                    <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">₹{item.price} x {item.qty}</p>
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div className="mt-4 text-xl font-bold">Total: ₹{total}</div>

            <form onSubmit={handleSubmit} className="mt-6 max-w-md">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border p-2 mb-2 rounded"
                    value={formData.customer_name}
                    onChange={e => setFormData({...formData, customer_name: e.target.value})}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border p-2 mb-2 rounded"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    required
                />
                <textarea
                    placeholder="Address"
                    className="w-full border p-2 mb-2 rounded"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    required
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
                    Place Order
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
};

export default Cart;