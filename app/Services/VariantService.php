<?php

namespace App\Services;

use App\Http\Controllers\UploadController;
use App\Models\Variant;
use Illuminate\Database\QueryException;

class VariantService
{
    public function createVariant(array $data) 
    {
        try {
            $variant = new Variant();
            $variant->s = $data['s'] ?? 0;
            $variant->m = $data['m'] ?? 0;
            $variant->l = $data['l'] ?? 0;
            $variant->xl = $data['xl'] ?? 0;
            $variant->xxl = $data['xxl'] ?? 0;
            $variant->images = $data['images'] ?? null;
            $variant->color_id = $data['color_id'];
            $variant->product_id = $data['product_id'];
            $variant->save();

            return $variant;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi tạo biến thể: ' . $e->getMessage());
        }

    }

    public function updateVariant(Variant $variant, array $data) 
    {
        if ($variant->images !== null && $variant->images !== $data['images']) {
            $images = json_decode($variant->images, true);
            $images->map(function ($image) {
                UploadController::deleteImage($image);
            });
        }

        try {
            $variant->s = $data['s'] ?? $variant->s;
            $variant->m = $data['m'] ?? $variant->m;
            $variant->l = $data['l'] ?? $variant->l;
            $variant->xl = $data['xl'] ?? $variant->xl;
            $variant->xxl = $data['xxl'] ?? $variant->xxl;
            $variant->images = $data['images'] ?? $variant->images;
            $variant->color_id = $data['color_id'] ?? $variant->color_id;
            $variant->product_id = $data['product_id'] ?? $variant->product_id;
            $variant->save();

            return $variant;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi update biến thể: ' . $e->getMessage());
        }

    }

    public function getVariant($id) {
        $variant = Variant::find($id);
        $variant->images = json_decode($variant->images, true);
        $variant->color_name = $variant->color->name;
        return $variant;
    }

    public function getVariants($productId)
    {
        $variants = Variant::where('product_id', $productId)->get();

        $variants = $variants->map(function ($variant) {
            $variant->images = json_decode($variant->images, true);
            $variant->color_name = $variant->color->name;
            return $variant;
        });

        return $variants;
    }

    public function deleteVariant($id)
    {
        $variant = Variant::find($id);
        if ($variant) {
            $variant->delete();
        }
    }
}