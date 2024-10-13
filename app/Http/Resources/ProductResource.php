<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    private function changeSaleToNumber($sale, $saleType) 
    {
        if ($saleType === 'percent') {
            return is_string($sale) ? (float) rtrim($sale, "%") : $sale;
        } else if ($saleType === "value") {
            return is_string($sale) ? (float) rtrim($sale, "đ") : $sale;
        }

        return $sale;
    }

    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'name' => $this->name,
        'sku' => $this->sku,
        'category_id' => $this->category_id,
        'original_price' => $this->original_price,
        'price' => $this->price,
        'sold_quantity' => $this->sold_quantity,
        'avatar' => $this->avatar,
        'intro' => $this->intro ?? "",
        'detail' => $this->detail ?? "",
        'preserve' => $this->preserve ?? "",
        'hot' => $this->hot,
        'new' => $this->new,
        'sale' => $this->changeSaleToNumber($this->sale, $this->sale_type),
        'sale_type' => $this->sale_type,
        'created_at' => $this->created_at,
        'category_name' => $this->category->name ?? null,
        'variants' => VariantResource::collection($this->whenLoaded('variants')),
        ];
    }


}
