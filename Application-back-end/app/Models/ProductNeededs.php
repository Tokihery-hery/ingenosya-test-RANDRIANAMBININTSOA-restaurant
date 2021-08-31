<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductNeededs extends Model
{
    use HasFactory;

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
