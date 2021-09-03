<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foods extends Model
{
    use HasFactory;
    protected $fillable =[
         'name',
         'price',
         'description',
         'photo'
     ];

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }
        public function all_price()
    {
        return $this->hasMany(Price::class);
    }
}
