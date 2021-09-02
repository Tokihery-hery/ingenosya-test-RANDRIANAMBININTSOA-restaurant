<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\ProductNeededs;
use App\Http\Controllers\ProductNeededsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class IngredientController extends Controller
{

     /**
     * insert or update Ingredient
     * @param  Id foods $food_id
     * @param  \App\Models\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public static function addIngredientOfFood($food_id, $ingredient_data)
    {
        $result;
        $ingredient_data["foods_id"] = $food_id; 
        $product_id = $ingredient_data["product_neededs_id"];

        $ingredient = Ingredient::where('foods_id', $food_id);
        $exitsProduct = $ingredient->where('product_neededs_id',  $product_id);
        if($exitsProduct->exists()){
            foreach ($exitsProduct->get() as $item) {
                $ingredient_data['quantity'] += $item->quantity;
                // $ingredient_data['sous_total'] += $item=>quantity * $ingredient['quantity']; use it after add column sous_total in ingredient table by refresh migrate
            }
            $response = $ingredient->update($ingredient_data);
            $result = [
                'action'=>'updated', 
                'response'=>$response
            ];
        }else{
            $response = Ingredient::create($ingredient_data);
            $result = [
                'action'=>'created', 
                'response'=>$response
            ];
        }
        return $result;
    }
    public static function createIngredient($food_id, $ingredients_data)
    {
        // $data =['foods_id'=>0];
        $ingredients_data['foods_id'] = $food_id;
        // dd($ingredients_data);
        return Ingredient::create($ingredients_data);
    }
     /**
     * remove or update Ingredient
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function removeIngredientOfFood(Request $request)
    {
        $result;
        $ingredient_data = $request->all();
        $ingredient_data["foods_id"] = $request->food_id; 
        $product_id = $ingredient_data["product_neededs_id"];
        $ingredient = Ingredient::where('foods_id', $request->food_id);
        $exitsProduct = $ingredient->where('product_neededs_id',  $product_id);
        if($exitsProduct->exists()){
            foreach ($exitsProduct->get() as $item) {
                if($ingredient_data['quantity']<$item->quantity){
                    $ingredient_data['quantity'] = $item->quantity - $ingredient_data['quantity'];
                    $response = $ingredient->update($ingredient_data);
                    $result = [
                        'action'=>'updated', 
                        'response'=>$response
                    ];
                }else{
                    $response = $exitsProduct->delete();
                    $result = [
                        'action'=>'deleted',
                        'response'=> $response
                    ];
                }
                // $ingredient_data['sous_total'] += $item=>quantity * $ingredient['quantity']; use it after add column sous_total in ingredient table by refresh migrate
            }
        }

        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ingredient  $ingredient
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Ingredient $ingredient, Request $request)
    {
        return $ingredient->find($request->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ingredient $ingredient)
    {
        
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function updateQuantityProducts($product_id)
    {
        // $product = ProductNeededs
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ingredient $ingredient)
    {
        //
    }
    public function updateQtyOneIngredientOfFood(Ingredient $ingredient, Request $request)
    {
        $id = $request->igd_id;
        $ingredient->find($id)->update(["quantity"=>$request->newQuantity]);
        return true;
    }
}
