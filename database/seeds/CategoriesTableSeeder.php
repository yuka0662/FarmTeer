<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
            [
                'categoryname' => '野菜',
            ],
            [
                'categoryname' => '果物',
            ],
            [
                'categoryname' => '穀物',
            ],
            [
                'categoryname' => '加工品',
            ],
            [
                'categoryname' => 'その他',
            ],
        ]);
    }
}
