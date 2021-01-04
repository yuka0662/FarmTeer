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
                'photo' => 'C:\farmteer\FarmTeer\resources\images\tomato.jpg',
                'goods_name' =>  '熊本県産　新鮮！フルーツトマト',
                'quantity' => '3kg',
                'price' => 2900,
                'carriage' => 500,
                'buydate' => now(),
                'members_id' => 1
                //'timestamps' => now()
            ]
        ]);
    }
}
