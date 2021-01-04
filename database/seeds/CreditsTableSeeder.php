<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreditsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('credits')->insert([
            [
            'cardnum'=>000000000000,
            'cardname'=>'YASAIYOSHIKO',
            'month'=>11,
            'year'=>22,
            'securitycode'=>000,
            'user_id'=>1
            ]
        ]);
    }
}
