<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentsTableSeeder extends Seeder
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
                'payname' => 'クレジット'
            ],
            [
                'payname' => '代引き'
            ],
            [
                'payname' => 'コンビニ支払'
            ],
            [
                'payname' => '銀行振込'
            ],
        ]);
    }
}
