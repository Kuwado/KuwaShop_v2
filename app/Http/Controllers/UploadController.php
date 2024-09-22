<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    //
    public function uploadImages(Request $request)
    {
        // $request->validate([
        //     'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        // ]);

        $imageNames = [];

        foreach($request->file('images') as $image) {
            $imageName = time() . '_' . uniqid() . '.' . $image->extension();
            $image->storeAs('images', $imageName, 'public');
            $imagesNames[] = $imageName;
        }

        return response()->json([
            'message' => 'Ảnh đã được thêm thành công',
            'images' => $imageNames
        ]);
    }
}
