<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->insert([
            [
                'listnumber'=>1,
                'rating'=>0,
                'review'=>null,
                'usernumber'=>1
            ],
            [
                'listnumber'=>1,
                'rating'=>1,
                'review'=>'とても美味しかったです',
                'usernumber'=>2
            ]
        ]);
    }
}
