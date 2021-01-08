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
                'farmname' => 'ヤサイヨシコ',
                'goodsname' => '熊本県産　新鮮！フルーツトマト',
                'quantity' => '3kg',
                'expired' => '冷蔵で1週間',
                'price' => 2900,
                'carriage' => 500,
                'burden' => '農園',
                'howcarri' => 'ゆうパック',
                'carridays' => '3日',
                'carriarea' => '大阪府',
                'pesticides' => null,
                'detail' => 'みずみずしいトマトです。サラダにお勧めです。',
                'category_id' => 1,
                'photo' => 'tomato.jpg',
                'profit' => 2900,
                'state' => TRUE,
                'members_id'=> 1,
            ],
            [
                'farmname' => 'スイタ農場',
                'goodsname' => '鳥取県産　アスパラガス',
                'price' => 4000,
                'quantity' => '2kg',
                'expired' => '冷蔵で4日',
                'carriage' => 300,
                'burden' => '購入者',
                'howcarri' => '普通配送',
                'carridays' => '1日',
                'carriarea' => '滋賀県',
                'pesticides' => 'トリフミン水和剤 バイコラール水和剤',
                'detail' => '春を感じさせてくれる新鮮なアスパラガスです。',
                'category_id' => 1,
                'photo' => 'asparagus.jpg',
                'profit' => 4000,
                'state' => TRUE,
                'members_id'=> 2,
            ],
            [
                'farmname' => 'コカ農場',
                'goodsname' => '和歌山県産イチゴ',
                'price' => 3000,
                'quantity' => '1kg',
                'experid' => '冷蔵で3日',
                'carriage' => 600,
                'burden' => '購入者',
                'howcarri' => '普通配送',
                'carridays' => '2日',
                'carriarea' => '東京都',
                'pesticides' => null,
                'detail' => 'みずみずしいイチゴです。',
                'category_id' => 2,
                'photo' => 'img01.jpg',
                'profit' => 4000,
                'state' => TRUE,
                'members_id'=> 3,
            ]
        ]);
    }
}
