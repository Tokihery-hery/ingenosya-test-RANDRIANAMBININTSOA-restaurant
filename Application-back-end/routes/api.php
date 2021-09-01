<?php
use App\Http\Controllers\Controller;
use App\Http\Controllers\FoodsController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//food
Route::get('/foods', [FoodsController::class, 'getAllFoods']);
Route::get('/foods/details/{food_id}', [FoodsController::class, 'getDetailsFoods']);
Route::get('/food/with_ingredient/{food_id}', [FoodsController::class, 'getOneFoodWithIngredient']);
Route::get('/food/without_ingredient/{food_id}', [FoodsController::class, 'getOneFoodWithoutIngredient']);
Route::post('/foods', [FoodsController::class, 'store']);
Route::put('/foods/{food_id}', [FoodsController::class, 'updateOneFood']);

//input obligatory {'product_neededs_id': value, 'foods_id':value}
Route::post('/food/{food_id}/add_ingredient', [FoodsController::class, 'addIngredientOfFood']);
Route::post('/food/{food_id}/remove_ingredient', [IngredientController::class, 'removeIngredientOfFood']);

//igd_id = ingredient_id
Route::get('/food/{food_id}/ingredient/{igd_id}', [FoodsController::class, 'getOneIngredientOfFood']);
Route::put('/food/{food_id}/ingredient/{igd_id}', [FoodsController::class, 'updateOneIngredientOfFood']);
Route::delete('/food/{food_id}/ingredient/{igd_id}', [FoodsController::class, 'deleteOneIngredientOfFood']);

//ingredient

Route::post('/ingredients', [IngredientController::class, 'addIngredient']);
Route::get('/ingredients', [FoodsController::class, 'getIngredient']);
Route::get('/ingredient/{id}', [IngredientController::class, 'show']);

//product

Route::get('/product', [ProductController::class, 'getProduct']);
Route::put('/product/{product_id}', [ProductController::class, 'updateProduct']);
Route::post('/product', [ProductController::class, 'createProduct']);
Route::delete('/product', [ProductController::class, 'createProduct']);


//uploadfile
Route::post('/upload', [Controller::class, 'uploadimage']);








// Route::get('/{id}', [ApiController::class, 'api_getId']);

