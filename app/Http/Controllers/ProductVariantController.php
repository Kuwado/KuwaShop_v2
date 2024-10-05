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
            $productVariant->images = $request->input('images');
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

    public function getVariants (Request $request)
    {
        $productId = $request->query('product_id');
        $variants = ProductVariant::where('product_id', $productId)->get();

        if(!$variants) return response()->json(['message' => 'Không tìm thấy biến thể'], 404);

        $variants = $variants->map(function ($variant) {
            $variant->images = json_decode($variant->images, true);
            $variant->color_name = $variant->color->name;
            return $variant;
        });


        return response()->json([
            'variants' => $variants,
            'message' => 'Đã lấy thành công danh sách biến thể'
        ], 200);
    }
}
