<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Price;
use App\Models\Foods;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{
    public function getPrice(Foods $foods,Request $request,$foods_id=null){
        $result;
        if(!empty($foods_id)){
            $result = $foods::find($foods_id)->all_price;
        }else if(!empty($request->food_id !=null)){
            $result = $foods::find($request->food_id)->all_price;
        }
        // dd($result);
        return $result;
    }
    public function updatePrice(Price $price, Request $request, $foods_id=null){
        $result;
        if($foods_id){
            $result = $price::find($foods_id)->update($request->all());
        }
        return $result;
        
    }
    public function removePrice(Request $request){
        
    }
    public function addPrice(Price $price,Request $request){
        $result;
        foreach ($request->all() as $price_variante) {
           $result = $price::create($price_variante);
        }
        
        return $result;
}
}