<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductVariant;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductVariantController extends Controller
{
    public function create(Request $request, $product_id)
    {
        $product = Product::find($product_id);
        if (!$product) {
            return response()->json([
                'message' => 'Không tìm thấy sản phẩm',
            ], 404);
        }

        $request->validate([
            's' => 'nullable|numeric',
            'm' => 'nullable|numeric',
            'l' => 'nullable|numeric',
            'xl' => 'nullable|numeric',
            'xxl' => 'nullable|numeric',
            'image_paths' => 'nullable|string',
            'color_id' => 'required|exists:colors,id',
        ]);

        try {
            $productVariant = new ProductVariant();
            $productVariant->s = $request->input('s') ?? 0;
            $productVariant->m = $request->input('m') ?? 0;
            $productVariant->l = $request->input('l') ?? 0;
            $productVariant->xl = $request->input('xl') ?? 0;
            $productVariant->xxl = $request->input('xxl') ?? 0;
            $productVariant->images = $request->input('image_paths');
            $productVariant->color_id = $request->input('color_id');
            $productVariant->product_id = $product_id;
            $productVariant->save();

            return response()->json([
                'message' => 'Biến thể sản phẩm đã được tạo thành công!',
                'productVariant' => $productVariant
            ], 201);
        } catch (QueryException $e) {
            return response()->json([
                'message' => 'Đã xảy ra lỗi khi tạo sản phẩm.',
                'error' => $e->getMessage()
            ], 500);
        } 
    }
}
