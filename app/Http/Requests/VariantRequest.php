<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VariantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            's' => 'nullable|numeric',
            'm' => 'nullable|numeric',
            'l' => 'nullable|numeric',
            'xl' => 'nullable|numeric',
            'xxl' => 'nullable|numeric',
            'images' => 'nullable|string',
            'color_id' => 'required|exists:colors,id',
            'product_id' => 'required|exists:products,id'
        ];
    }
}