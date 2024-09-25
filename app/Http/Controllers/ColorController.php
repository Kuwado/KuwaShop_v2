<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    //
    public function index() 
    {
        $colors = Color::all();

        return response()->json([
            'message' => 'Lấy thành công danh sách màu',
            'colors' => $colors
        ], 200);
    } 
}
