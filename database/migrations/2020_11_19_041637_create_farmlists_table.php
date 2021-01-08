<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use phpDocumentor\Reflection\Types\Nullable;

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
            $table->string('farmname')->comment('農場名');
            $table->string('goodsname')->comment('商品名');
            $table->string('quantity');
            $table->string('expired')->comment('賞味/消費期限');
            $table->integer('price')->comment('値段');
            $table->integer('carriage')->comment('送料');
            $table->string('burden')->comment('送料負担者');
            $table->string('howcarri')->comment('発送方法');
            $table->string('carridays')->comment('発送できるまでの日数');
            $table->string('carriarea')->comment('配送元地域');
            $table->string('pesticides')->nullable()->comment('使用している農薬名、使用していない場合はnull');
            $table->string('detail')->comment('商品詳細');
            $table->integer('category_id')->unsigned()->comment('外部キーcategories');
            $table->foreign('category_id')->references('id')->on('categories')->onUpdate('cascade');
            $table->string('photo')->nullable()->comment('写真のパス');
            $table->integer('profit')->comment('農家側の利益');
            $table->boolean('state')->default(TRUE)->comment('TRUE=商品がある FALSE=商品が売れた');
            $table->integer('members_id')->unsigned()->comment('外部キーmembers');
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
