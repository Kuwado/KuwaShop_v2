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
        // Xác thực dữ liệu đầu vào
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
            // Tạo sản phẩm mới
            $product = Product::create($request->all());

            // Trả về phản hồi thành công
            return response()->json(['message' => 'Sản phẩm đã được tạo thành công!', 'product' => $product], 201);
        } catch (QueryException $e) {
            // Xử lý lỗi khi không tạo được sản phẩm
            return response()->json(['message' => 'Đã xảy ra lỗi khi tạo sản phẩm.', 'error' => $e->getMessage()], 500);
        }
    }
}
