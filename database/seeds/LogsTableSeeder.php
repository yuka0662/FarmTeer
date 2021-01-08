<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('logs')->insert([
            [
                'photo' => 'tomato.jpg',
                'goods_name' =>  '熊本県産　新鮮！フルーツトマト',
                'quantity' => '3kg',
                'price' => 2900,
                'carriage' => 500,
                'total' => 3400,
                'buydate' => now(),
                'list_id' => 1,
                'gene_id' => 1,
                'delistatus' => '発送済'
                //'timestamps' => now()
            ],
            [
                'photo' => 'tomato.jpg',
                'goods_name' =>  '熊本県産　新鮮！フルーツトマト',
                'quantity' => '3kg',
                'price' => 2900,
                'carriage' => 500,
                'total' => 3400,
                'buydate' => now(),
                'list_id' => 1,
                'gene_id' => 1,
                'delistatus' => '未発送'
                //'timestamps' => now()
            ]
        ]);
    }
}
