<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        return [
            'revenue' => Order::sum('total'),
            'orders' => Order::count(),
            'customers' => Order::distinct('phone')->count(),
            'recent_orders' => Order::latest()->take(5)->get()
        ];
    }
}
