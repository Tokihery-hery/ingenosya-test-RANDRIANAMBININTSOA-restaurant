<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductNeededsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_neededs', function (Blueprint $table) {
           $table->id();
            $table->timestamps();
            $table->float('price');
            $table->float('quantity');
            $table->integer('ingredient_id')->unsigned();
            $table->foreign('ingredient_id')->references('id')->on('ingredients')->default(null);
            $table->integer('product_id')->unsigned();
            $table->foreign('product_id')->references('id')->on('products')->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_neededs');
    }
}
