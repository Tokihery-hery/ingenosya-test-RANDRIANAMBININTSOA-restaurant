<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    protected $fillable =[
         'price',
         'foods_id',
         'promo'
     ];

    public function food()
    {
        return $this->belongsTo(Foods::class);
    }
}
