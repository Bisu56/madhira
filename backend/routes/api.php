<?php

use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);

Route::post('/orders', [OrderController::class, 'store']);

Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
