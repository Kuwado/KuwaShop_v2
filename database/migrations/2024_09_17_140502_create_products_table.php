<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sku')->unique();
            $table->string('type');
            $table->decimal('original_price', 10, 2);
            $table->decimal('price', 10, 2);
            $table->integer('sold_quantity')->default(0);
            $table->longText('intro')->nullable();
            $table->longText('detail')->nullable();
            $table->longText('preserve')->nullable();
            $table->boolean('new')->default(true);
            $table->boolean('hot')->default(false);
            $table->string('sale')->default("not_sale");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};