<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFarmlistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farmlists', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('goodsname');
            $table->integer('price');
            $table->integer('carriage');
            $table->integer('profit');
            $table->integer('quantity');
            $table->string('derail');
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('categories')->onUpdate('cascade');
            $table->string('photo');
            $table->integer('members_id')->unsigned();
            $table->foreign('members_id')->references('id')->on('members');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('farmlists');
    }
}
