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
            $product->avatar = $request->input('avatar');
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


    public function index()
    {
        $products = Product::orderBy('created_at', 'asc')->paginate(10);
        
        return response()->json([
            'message' => 'Lấy thành công danh sách sản phẩm',
            'products' => $products
        ]);
    }

    public function indexNew()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
        
        return response()->json([
            'message' => 'Lấy thành công danh sách sản phẩm',
            'products' => $products
        ]);
    }

    public function indexHot()
    {
        $products = Product::orderBy('sold_quantity', 'desc')->paginate(10);
        
        return response()->json([
            'message' => 'Lấy thành công danh sách sản phẩm',
            'products' => $products
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Sản phẩm đã được xóa thành công'], 200);
        }

        return response()->json(['message' => 'Sản phẩm không tồn tại'], 404);
    }

    public function getProduct(Request $request) {
        $productId = $request->query('id');
        $product = Product::find($productId);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $variants = $product->variants()->get();

        return response()->json(([
            'product'=>$product,
            'variants'=>$variants,
        ]), 200);
    }
}
