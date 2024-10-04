<?php

namespace App\Providers;

class Format {
    public static function formatPrice($price) {
        if (is_numeric($price)) {
            $decimalPart = fmod($price, 1);
            if ($decimalPart == 0) {
                return intval($price);
            }
        }
        return $price;
    }
}