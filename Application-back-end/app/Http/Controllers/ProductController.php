<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
    public function getProduct(Request $request)
    {
        $products = Product::all();
        return $products;

    }
    public function addQuantity($product_id, $quantity)
    {
       $products = Product::find($product_id);
       if($products){
        $product = $products->get();
        foreach ($product as $key => $value) {
            $products->update(["quantity_available"=> $value['quantity_available'] +$quantity]);
        }
       }else{
        return 0;
       }
       return true;
    }
    
    public function removeQuantity($product_id, $quantity)
    {
       $products = Product::find($product_id);
       if($products){
        $product = $products->get();
        foreach ($product as $key => $value) {
            $products->update(["quantity_available"=> $value['quantity_available'] -$quantity]);
        }
       }else{
        return 0;
       }
       return true;
    }

    public function createProduct(Request $request)
    {
        $products = Product::create($request->all());
        return $products;
    }
    public function deleteProduct(Request $request)
    {
        $products = Product::find($request->food_id);
        return $products->delete();
    }


    public function updateProduct(Request $request)
    {
        $products = Product::find($request->product_id);
        return $products->update($request->all());
    }
    public function getProductByName(Request $request)
    {
        $name = $request->query('name');
        $result = Product::where('name', 'Lait jjj')->get('id');
        return $result;
    }

}
