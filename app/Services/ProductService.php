<?php

namespace App\Services;

use App\Http\Controllers\UploadController;
use App\Models\Product;
use Illuminate\Database\QueryException;

class ProductService
{
    private $uploadService;

    public function __construct(UploadService $uploadService) 
    {
        $this->uploadService = $uploadService;
    }

    public function createProduct(array $data)
    {   
        $image = null;
        if (isset($data['image_file']) && $data['image_file']) {       
            $image = $this->uploadService->uploadImage($data['image_file']);
        }

        $saleType = null;
        $sale = null;
        if (!$data['sale']) {
            $saleType = 'not';
        } else {
            if ($data['sale_type'] === 'percent') {
                $sale = $data['sale'] . '%';
            } else if ($data['sale_type'] === 'value') {
                $sale = $data['sale'] . 'đ';
            }
        }

        try {
            $product = new Product();
            $product->fill($data);
            $product->avatar = $image ?? $product->avatar;
            $product->sale_type = $saleType ?? $product->sale_type;
            $product->sale = $sale ?? $product->sale;
            $product->save();   
            return $product;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi tạo sản phẩm: ' . $e->getMessage());
        }
    }

    public function updateProduct(Product $product, array $data)
    {
        $image = null;
        if (isset($data['image_file']) && $data['image_file']) {       
            $image = $this->uploadService->uploadImage($data['image_file']);
            if ($product->avatar !== null) {
                $this->uploadService->deleteImage($product->avatar);
            }
        }

        try {
            $product->fill($data);
            $product->avatar = $image ?? $product->avatar;
            $product->save(); 
            return $product;        
        } catch (QueryException $e) {
            throw new \Exception('Lỗi update sản phẩm: ' . $e->getMessage());
        }
    }

    public function deleteProduct(int $id)
    {
        $product = Product::find($id);
        if ($product) {
            if ($product->avatar !== null) {
                $this->uploadService->deleteImage($product->avatar);
            }
            $product->delete();
        }
    }

    public function getProduct($id)
    {
        $product = Product::find($id);
        if($product->intro === null) $product->intro = '';
        if($product->detail === null) $product->detail = '';
        if($product->preserve === null) $product->preserve = '';

        if ($product->sale_type === 'percent') {
            $product->sale = rtrim($product->sale, "%");
        } else if ($product->sale_type === "value") {
            $product->sale = rtrim($product->sale, "đ");
        }

        $product->category_name = $product->category->name;

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



}