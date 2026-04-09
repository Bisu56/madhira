import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <span className="text-4xl font-black text-primary italic font-headline">Madhira</span>
                    <h1 className="text-2xl font-black font-headline mt-6 mb-2">Admin Login</h1>
                    <p className="text-on-surface-variant">Sign in to manage your store</p>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-error-container text-on-error-container px-4 py-3 rounded-lg text-sm font-bold">
                                {error}
                            </div>
                        )}
                        
                        <div>
                            <label className="block text-sm font-bold text-on-surface mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-surface-container border border-outline/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none"
                                placeholder="admin@madhira.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-on-surface mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-surface-container border border-outline/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl text-lg hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>

                <div className="text-center mt-6">
                    <a href="/" className="text-primary font-bold text-sm hover:underline">
                        ← Back to Store
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
