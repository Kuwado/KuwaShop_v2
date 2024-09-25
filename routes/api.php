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



Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/colors', [ColorController::class, 'index']);
Route::get('products', [ProductController::class, 'index']);