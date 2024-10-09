<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VariantController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/upload/images', [UploadController::class, 'uploadImages']);
Route::post('/upload/image', [UploadController::class, 'uploadImage']);

// Product
Route::get('/product', [ProductController::class, 'getProduct']);
Route::get('/products', [ProductController::class,'getProducts']);
Route::post('/product/create', [ProductController::class, 'createProduct']);
Route::delete('/product/delete/{id}', [ProductController::class, 'deleteProduct']);
Route::put('/product/update/{id}', [ProductController::class,'updateProduct']);

//Variant
Route::post('/variant/create', [VariantController::class, 'createVariant']);
Route::put('variant/update/{id}', [VariantController::class,'updateVariant']);
Route::delete('/variant/delete/{id}', [VariantController::class,'deleteVariant']);
Route::get('/variants', [VariantController::class, 'getVariants']);
Route::get('/variant', [VariantController::class,'getVariant']);

//Category
Route::get('/category', [CategoryController::class, 'getCategory']);
Route::get('/categories', [CategoryController::class, 'index']);

//Color
Route::get('/color', [ColorController::class, 'getColor']);
Route::get('/colors', [ColorController::class, 'index']);


Route::get('/test/product/{id}', [ProductController::class,'test']);