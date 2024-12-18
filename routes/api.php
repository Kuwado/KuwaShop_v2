<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VariantController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/user/create', [ProfileController::class, 'createUser']);
Route::post('/profile/create', [ProfileController::class, 'createProfile']);
Route::get('/profile', [ProfileController::class, 'getProfile']);

//Upload
Route::post('/upload/images', [UploadController::class, 'uploadImages']);
Route::post('/upload/image', [UploadController::class, 'uploadImage']);

// Product
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/product/create', [ProductController::class, 'createProduct']);
    Route::post('/product/update/{id}', [ProductController::class,'updateProduct']);
    Route::delete('/product/delete/{id}', [ProductController::class, 'deleteProduct']);
});
Route::get('/product', [ProductController::class, 'getProduct']);
Route::get('/products', [ProductController::class,'getProducts']);

//Variant
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () { 
    Route::post('/variant/create', [VariantController::class, 'createVariant']);
    Route::post('variant/update/{id}', [VariantController::class,'updateVariant']);
    Route::delete('/variant/delete/{id}', [VariantController::class,'deleteVariant']);
});
Route::get('/variants', [VariantController::class, 'getVariants']);
Route::get('/variant', [VariantController::class,'getVariant']);

//Category
Route::get('/category', [CategoryController::class, 'getCategory']);
Route::get('/categories', [CategoryController::class, 'index']);

//Color
Route::get('/color', [ColorController::class, 'getColor']);
Route::get('/colors', [ColorController::class, 'index']);

//Cart
// Route::middleware(['auth:sanctum', 'role:user'])->group(function () { 
// });

Route::get('/carts', [CartController::class,'getCarts']);
Route::get('/cart', [CartController::class,'getCart']);
Route::post('/cart/add', [CartController::class, 'addToCart']);
Route::post('cart/update/{id}', [CartController::class,'updateCart']);
Route::delete('/cart/delete/{id}', [CartController::class,'deleteCart']);


