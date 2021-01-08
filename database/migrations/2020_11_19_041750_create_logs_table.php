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
            $table->string('photo')->nullable();
            $table->string('goods_name');
            $table->string('quantity');
            $table->integer('price');
            $table->integer('carriage');
            $table->integer('total')->comment('支払金額');
            $table->date('buydate')->comment('購入日');
            $table->integer('list_id')->comment('購入した商品id');
            $table->integer('gene_id')->comment('購入者のid');
            $table->string('delistatus')->comment('発送状況');
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
