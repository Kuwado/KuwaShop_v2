<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            'variant_id' => $this->variant_id,
            'size' => $this->size,
            'quantity' => $this->quantity,
            'user_id' => $this->user_id,
            'total' => $this->quantity * $this->variant->product->price,
            'variant' => new VariantResource($this->variant)
        ];
    }
}
