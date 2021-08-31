<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->float('price');
            $table->float('quantity')->default(0.0);
            $table->float('cout_production')->default(0.0);
            $table->integer('foods_id')->unsigned();
            $table->foreign('foods_id')->references('id')->on('foods')->default(null);
            $table->integer('product_neededs_id')->unsigned();
            $table->foreign('product_neededs_id')->references('id')->on('product_neededs')->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients');
    }
}
