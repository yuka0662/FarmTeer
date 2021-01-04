<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FarmlistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        
        DB::table('farmlists')->insert([
            [
                'goodsname' => '熊本県産　新鮮！フルーツトマト',
                'quantity' => '3kg',
                'price' => 2900,
                'carriage' => 500,
                'pesticides' => null,
                'detail' => 'みずみずしいトマトです。サラダにお勧めです。',
                'category_id' => 1,
                'photo' => 'C:\farmteer\FarmTeer\resources\images\tomato.jpg',
                'profit' => 2900,
                'state' => TRUE,
                'members_id'=> 1,
            ],
            [
                'goodsname' => '鳥取県産　アスパラガス',
                'price' => 4000,
                'quantity' => '2kg',
                'carriage' => 300,
                'pesticides' => 'トリフミン水和剤 バイコラール水和剤',
                'detail' => '春を感じさせてくれる新鮮なアスパラガスです。',
                'category_id' => 1,
                'photo' => 'C:\farmteer\FarmTeer\resources\images\asparagus.jpg',
                'profit' => 4000,
                'state' => TRUE,
                'members_id'=> 2,
            ],
            [
                'goodsname' => '和歌山県産イチゴ',
                'price' => 3000,
                'quantity' => '1kg',
                'carriage' => 600,
                'pesticides' => null,
                'detail' => 'みずみずしいイチゴです。',
                'category_id' => 2,
                'photo' => 'C:\farmteer\FarmTeer\resources\images\img01.jpg',
                'profit' => 4000,
                'state' => TRUE,
                'members_id'=> 3,
            ]
        ]);
    }
}
