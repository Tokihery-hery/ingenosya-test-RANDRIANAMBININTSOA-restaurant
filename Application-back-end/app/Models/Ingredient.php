<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

        protected $fillable =[
         'price',
         'foods_id',
         'product_neededs_id',
         'quantity'
     ];

 
    public function food()
    {
        return $this->belongsTo(Foods::class);
    }

    public function productNeeds()
    {
        return $this->hasMany(ProductNeededs::class);
    }
}
