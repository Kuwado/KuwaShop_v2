<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductVariantController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/upload/images', [UploadController::class, 'uploadImages']);
Route::post('/upload/image', [UploadController::class, 'uploadImage']);

Route::post('/product/create', [ProductController::class, 'create']);
Route::post('/product/variant/create/{product_id}', [ProductVariantController::class, 'create']);



Route::get('/category', [CategoryController::class, 'getCategory']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/color', [ColorController::class, 'getColor']);
Route::get('/colors', [ColorController::class, 'index']);
Route::get('/product', [ProductController::class, 'getProduct']);
Route::get('/variants', [ProductVariantController::class, 'getVariants']);
Route::get('/products/old', [ProductController::class, 'index']);
Route::get('/products/new', [ProductController::class, 'indexNew']);
Route::get('/products/hot', [ProductController::class, 'indexHot']);
Route::delete('/product/{id}', [ProductController::class, 'destroy']);