<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // get all categories
    public function index () {
        $categories = Category::all();
        $nestedCategories = $this->buildCategoryTree($categories);

        return response()->json([
            'message' => 'Lấy thành công danh mục sản phẩm',
            'categories' => $nestedCategories
        ], 200);
    }

    private function buildCategoryTree($categories, $parentId = null)
    {
        $branch = [];

        foreach ($categories as $category) {
            if ($category->parent_id === $parentId) {
                $children = $this->buildCategoryTree($categories, $category->id);
                if ($children) {
                    $category->children = $children;
                } else {
                    $category->children = null;
                }
                $branch[] = $category;
            }
        }

        return $branch;
    }
}
