<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('kana');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('postcode');
            $table->string('pref');
            $table->string('municipality');
            $table->string('building');
            $table->integer('pay_id')->unsigned();
            $table->foreign('pay_id')->references('id')->on('payments')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('TEL');
            $table->integer('part_id')->unsigned();
            $table->foreign('part_id')->references('id')->on('partitions')->onUpdate('cascade')->onDelete('cascade');
            $table->rememberToken();
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
        Schema::dropIfExists('members');
    }
}
