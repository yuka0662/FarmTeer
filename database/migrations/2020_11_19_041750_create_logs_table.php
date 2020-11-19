<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('photo_id')->unsigned();
            $table->foreign('photo_id')->references('id')->on('photos')->onUpdate('cascade')->onDelete('cascade');
            $table->string('goods_name')->unsigned();
            $table->foreign('goods_name')->references('goodsname')->on('farmlists')->onUpdate('cascade');
            $table->integer('price');
            $table->foreign('price')->references('price')->on('farmlists')->onUpdate('cascade');
            $table->integer('carriage');
            $table->foreign('carriage')->references('carriage')->on('farmlists')->onUpdate('cascade');
            $table->integer('quantity');
            $table->foreign('quantity')->references('quantity')->on('farmlists')->onUpdate('cascade');
            $table->date('buydate');
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
        Schema::dropIfExists('logs');
    }
}
