<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class GeneralsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('generals')->insert([
            [
                'account_name'=>'おいしいやさい',
                'name'=>'山田花子',
                'kana'=>'ヤマダハナコ',
                'email'=>'yamadahanako@saikou.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('password'),
                'postcode'=>0010000,
                'pref'=>'どこか',
                'municipality'=>'あっちです',
                'building'=>'こっちです',
                'TEL'=>1234567890
            ]
        ]);
    }
}
