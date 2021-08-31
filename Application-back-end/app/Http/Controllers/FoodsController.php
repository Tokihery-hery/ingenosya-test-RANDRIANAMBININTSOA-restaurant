<?php

namespace App\Http\Controllers;

use App\Http\Controllers\IngredientController;
use App\Models\Foods;
use App\Models\Ingredient;
use App\Models\ProductNeededs;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FoodsController extends Controller
{

    public function getDetailsFoods(Request $request)
    {

        $food = Foods::find($request->food_id);

        if($food){
            $food_data= $food->get(); 
            $ingredient =$food->ingredients;
            $product = [];
            $food['ingredients'] = $ingredient;
            $cout =[];
            foreach ($ingredient as $key) {
                if($key['id']){
                    $key['product'] = $this::getProduct($this::getIngredient($key['id']));
                    array_push($cout, $this::getPriceAndQuantity($this::getIngredient($key['id'])));
                }
            }
            foreach ($food['ingredients'] as $index_ingredient => $key) {
                foreach ($key['product'] as $index_product =>$product ) {
                    $key['cout_production_unitaire'] +=($cout[$index_ingredient][$index_product]['price'] * $cout[$index_ingredient][$index_product]['quantity']); 
                }
            }
        }else{
            $food = [];
        }
        return $food;
    }

    public function getProductId($ingredients=[])
    {
        $product_ids = [];
        foreach ($ingredients as $key) {
            array_push($product_ids, $key['id']);
        }
        return $product_ids;
    }

    public function getPriceAndQuantity($productNeeds)
    {
        $priceWithQuantity =[];
        foreach ($productNeeds as $key) {
           array_push($priceWithQuantity, ["price"=>$key['price'], "quantity"=>$key['quantity']]);
        }
        return $priceWithQuantity;
    }

    public function getProduct($productNeeds)
    {
        $product_ids =[];
        $product =[];
        foreach ($productNeeds as $key) {
            array_push($product_ids, $key['product_id']);
            array_push($product, $key['quantity']);
        }

        $products = Product::whereIn('id', $product_ids)->get();
        foreach ($products as $key =>$values) {
            $values['product_neccessary'] = $product[$key];
        }
        return $products;
    }


    public function getIngredient($id){
        $products = Ingredient::find($id)->productNeeds;
        return $products;
    }


    /**
     * Get all foods with ingredients
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllFoods()
    {
        try {
            $food = Foods::all();
            foreach ($food as $value) {
                $value["ingredients"] = Ingredient::where('foods_id', $value->id)->get();
            }
            $result = [
                'action'=>'get', 
                'response'=>true,
                'data'=>$food
            ];
        } catch (Exception $e) {
            $result = [
                'action'=>'error', 
                'response'=>false
            ];
        }
        return $result;
    }
    /**
     * Create new food
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createFoods(Request $request)
    {
       $response = Foods::create($request->all());

        $result = [
            'action'=>'created', 
            'response'=>$response
        ];
        return $result;
    }

    /**
     * Get one foods without  ingredient
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Foods  $foods
     * @return \Illuminate\Http\Response
     */
    public function getOneFoodWithoutIngredient(Foods $foods, Request $request)
    {
        $food = $foods->find($request->food_id);
        return $food;
    }

        /**
     * Get one foods with ingredient
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Foods  $foods
     * @return \Illuminate\Http\Response
     */


    public function getOneFoodWithIngredient(Foods $foods, Request $request)
    {
       $ingredients = [];
        $food = $foods->find($request->food_id);
        return [$food, array_push($ingredients, $food->ingredients)];
    }


    /**
     * Add or Update one food's ingredient
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addIngredientOfFood(Request $request)
    {
        $data = $request->all();//Data ingredient
        $result = IngredientController::addIngredientOfFood((int) $request->food_id, $data);
        return $result;
    }

    /**
     * Update One the specified food
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Foods  $foods
     * @return \Illuminate\Http\Response
     */
    public function updateOneFood(Request $request, Foods $foods)
    {
        $response = $foods->find($request->food_id)
            ->update($request->all());

        $result = [
            'action'=>'updated', 
            'response'=>$response
        ];
        return $result;
    }

    /**
     * Get One specified Ingredient of foods.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function getOneIngredientOfFood(Request $request)
    {
        $result;
        try {
            $data = Ingredient::where(['id'=>$request->igd_id,'foods_id'=>$request->food_id])->get();

            $result = [
                'action'=>'get', 
                'response'=>true,
                'data'=>$data
            ];            
        } catch (Exception $e) {
             $result = [
                'action'=>'error', 
                'response'=>false
            ];
        }
        return $result;
    }


    /**
     * Update One specified Ingredient of foods.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function updateOneIngredientOfFood(Request $request, Ingredient $ingredients)
    {
        $result;
        try {
            $response = $ingredients->where(['id'=>$request->igd_id,'foods_id'=>$request->food_id])
                ->update($request->all());

            $result = [
                'action'=>'updated', 
                'response'=>$response
            ];  

        } catch (Exception $e) {
            $result = [
                'action'=>'error', 
                'response'=>false
            ];
        }
        return $result;
    }

    /**
     * Delete One specified Ingredient of foods.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ingredient  $ingrendient
     * @return \Illuminate\Http\Response
     */
    public function deleteOneIngredientOfFood(Request $request, Ingredient $ingredients)
    {
        $result;
        try {
            $response = $ingredients->where(['id'=>$request->igd_id,'foods_id'=>$request->food_id])
                ->delete();
            $result = [
                'action'=>'deleted', 
                'response'=>$response
            ];
            return $result;//return 1 if has successfull deleted, and 0 if has not deleted
            
        } catch (Exception $e) {
            $result = [
                'action'=>'error', 
                'response'=>false
            ];
        }
        return $result;
    }    
}
