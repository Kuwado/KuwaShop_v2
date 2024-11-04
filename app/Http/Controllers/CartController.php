<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Variant;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function getCarts(Request $request)
    {
        $userId = $request->query('user_id');
    
        $carts = Cart::where('user_id', $userId)->get();
    
        $total = $carts->sum(function ($cart) {
            $price = floatval($cart->variant->product->price);
            return $cart->quantity * $price;
        });
        $total = strval($total);

    
        return response()->json([
            'message' => "Lấy thành công giỏ hàng",
            'carts' => CartResource::collection($carts),
            'count' => $carts->count(),
            'total' => $total
        ], 200);
    }
    

}
