<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartitionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        
        DB::insert([
           [
               'partname' => '農家'
           ],
           [
               'partname' => '一般'
           ],
           [
               'partname' => 'ボランティア'
           ]
        ]);
    }
}
