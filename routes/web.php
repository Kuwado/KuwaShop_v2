<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Render file welcome.blade.php
})->where('any', '.*');
