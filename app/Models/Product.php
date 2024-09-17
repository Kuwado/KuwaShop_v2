<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sku',
        'type',
        'original_price',
        'price',
        'sold_quantity',
        'intro',
        'detail',
        'preserve',
        'hot',
        'new',
        'sale',
    ];    

    public function variants() 
    {   
        return $this->hasMany(ProductVariant::class);
    }
} 
