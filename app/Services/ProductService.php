<?php

namespace App\Services;

use App\Http\Controllers\UploadController;
use App\Models\Product;
use Illuminate\Database\QueryException;

class ProductService
{
    public function createProduct(array $data)
    {
        try {
            $product = new Product();
            $product->name = $data['name'];
            $product->category_id = $data['category_id'] ?? null;
            $product->original_price = $data['original_price'];
            $product->price = $data['price'];
            $product->avatar = $data['avatar'] ?? null;
            $product->intro = $data['intro'] ?? null;
            $product->detail = $data['detail'] ?? null;
            $product->preserve = $data['preserve'] ?? null;
            $product->sale = $data['sale'] ?? 'not';
            $product->save();   

            return $product;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi tạo sản phẩm: ' . $e->getMessage());
        }
    }

    public function updateProduct(Product $product, array $data)
    {
        if ($product->avatar !== null && $product->avatar !== $data['avatar']) {
            UploadController::deleteImage($product->avatar);
        }

        try {
            $product->name = $data['name'] ?? $product->name;
            $product->category_id = $data['category_id'] ?? $product->category_id;
            $product->original_price = $data['original_price'] ?? $product->original_price;
            $product->price = $data['price'] ?? $product->price;
            $product->avatar = $data['avatar'] ?? $product->avatar;
            $product->intro = $data['intro'] ?? $product->intro;
            $product->detail = $data['detail'] ?? $product->detail;
            $product->preserve = $data['preserve'] ?? $product->preserve;
            $product->sale = $data['sale'] ?? $product->sale;
            $product->save();   

            return $product;        
        } catch (QueryException $e) {
            throw new \Exception('Lỗi update sản phẩm: ' . $e->getMessage());
        }
    }

    public function getProduct($id)
    {
        $product = Product::find($id);
        if($product->intro === null) $product->intro = '';
        if($product->detail === null) $product->detail = '';
        if($product->preserve === null) $product->preserve = '';

        $product->category_name = $product->category->name;

        $product->sale_type = $product->sale;
        if ($product->sale !== 'not') {
            if (substr($product->sale, -1) === "%") {
                $product->sale_type = 'percent';
                $product->sale = rtrim($product->sale, "%");
            } else {
                $product->sale_type = 'value';
            }
        }

        return $product;
    }

    public function getProducts(string $type, int $limit = 10)
    {
        return match ($type) {
            'old' => Product::orderBy('created_at', 'asc')->paginate($limit),
            'new' => Product::orderBy('created_at', 'desc')->paginate($limit),
            'hot' => Product::orderBy('sold_quantity', 'desc')->paginate($limit),
            default => Product::all(),
        };
    }

    public function deleteProduct(int $id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
        }
    }

}