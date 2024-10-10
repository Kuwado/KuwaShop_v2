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
        'category_id',
        'original_price',
        'price',
        'sold_quantity',
        'intro',
        'detail',
        'preserve',
        'hot',
        'new',
        'sale',
        'sale_type'
    ];    

    public function variants() 
    {   
        return $this->hasMany(Variant::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::created(function ($product) {
            if (!$product->sku) {    
                $cat = '';
                if ($product->category_id) {
                    $cat = $product->category_id;
                }     
                $product->sku = $cat . 'KWS' . str_pad($product->id, 5, '0', STR_PAD_LEFT);
                $product->save();
            }
        });
    }
} 
