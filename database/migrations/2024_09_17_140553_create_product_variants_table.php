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
        Schema::create('product_variants', function (Blueprint $table) {
            $table->id();
            $table->integer('s')->default(0);
            $table->integer('m')->default(0);
            $table->integer('l')->default(0);
            $table->integer('xl')->default(0);
            $table->integer('xxl')->default(0);
            $table->integer('sold_quantity')->default(0);
            $table->foreignId('color_id')->constrained()->onDelete('cascade');
            $table->foreignId('product')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_variants');
    }
};
