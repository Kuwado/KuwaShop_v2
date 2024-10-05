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

    public function getColor(Request $request)
    {
        $id = $request->query('id');
        $color = Color::find($id);

        if (!$color) {
            return response()->json(['message'=>'Không tìm thấy màu sắc'], 404);
        }

        return response()->json([
            'color' => $color,
            'message' => 'Lấy thành công màu sắc'
        ], 200);
    }
}
