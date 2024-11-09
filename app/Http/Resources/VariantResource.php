<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VariantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            's' => $this->s,
            'm' => $this->m,
            'l' => $this->l,
            'xl' => $this->xl,
            'xxl' => $this->xxl,
            'images' => json_decode($this->images, true),
            'sold_quantity' => $this->sold_quantity,
            'color_id' => $this->color_id,
            'product_id' => $this->product_id,
            'created_at' => $this->created_at,
            'color_name' => $this->color->name ?? null,
            'color_code' => $this->color->code ?? null,
            'product' => new ProductResource($this->product)
        ];
    }
}
