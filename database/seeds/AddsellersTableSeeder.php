<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddsellersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addsellers')->insert([
            [
                'farmname'=>'test農園',
                'email'=>'abcde@fmail.com',
                'email_verified_at'=>now(),
                'postcode'=>0000000,
                'pref'=>'大阪府',
                'municipality'=>'大阪市北区中崎西3-12',
                'building'=>'どっかのビル'
            ]
        ]);
    }
}
