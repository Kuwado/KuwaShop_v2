<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Providers\Format;
use App\Services\ProductService;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    private $productService;
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function createProduct(ProductRequest $request)
    {
        $validatedData = $request->validated();

        $product = $this->productService->createProduct($validatedData);

        return response()->json([
            'message' => 'Sản phẩm đã được tạo thành công!',
            'product' => $product,
            'data' => $validatedData
        ], 201);
    }

    public function deleteProduct($id)
    {
      $this->productService->deleteProduct($id);

      return response()->json([
        'message' => 'Đã xóa thành công sản phẩm'
      ], 200);
    }

    public function getProducts(Request $request) {
        $type = $request->query('type');
        $products = $this->productService->getProducts( $type );

        return response()->json([
            'message' => 'Lấy thành công danh sách sản phẩm',
            'products' => $products
        ]);
    }

    public function getProduct(Request $request) {
        $productId = $request->query('id');
        $product = $this->productService->getProduct( $productId );

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json([
            'message' => 'Lấy thành công sản phẩm',
            'product' => $product,
        ], 200);
    }

    public function updateProduct(ProductRequest $request, $id)
    {
        $product = Product::find($id);
        $validatedData = $request->validated();

        $updatedProduct = $this->productService->updateProduct( $product, $validatedData );
        
        return response()->json([
            'message' => 'Đã cập nhật thành công sản phẩm',
            'product' => $updatedProduct
        ], 200);
    }

    public function test($id)
    {
        $product = Product::find($id);

        dd($product->all());
    }
}
