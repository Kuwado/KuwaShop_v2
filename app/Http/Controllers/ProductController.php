<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'nullable|exists:categories,id',
            'original_price' => 'required|numeric|min:0',
            'price' => 'required|numeric|min:0',
            'intro' => 'nullable|string',
            'detail' => 'nullable|string',
            'preserve' => 'nullable|string',
            'sale' => 'nullable|string'
        ]);
        
        try {
            $product = new Product();
            $product->name = $request->input('name');
            $product->category_id = $request->input('category_id');
            $product->original_price = $request->input('original_price');
            $product->price = $request->input('price');
            $product->intro = $request->input('intro');
            $product->detail = $request->input('detail');
            $product->preserve = $request->input('preserve');
            $product->sale = $request->input('sale') ?? 'not_sale';
            $product->save();

            return response()->json([
                'message' => 'Sản phẩm đã được tạo thành công!',
                'product' => $product
            ], 201);
        } catch (QueryException $e) {
            return response()->json([
                'message' => 'Đã xảy ra lỗi khi tạo sản phẩm.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
