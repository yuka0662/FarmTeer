<?php

use App\payment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(
            //CategoriesTableSeeder::class
            //PaymentsTableSeeder::class
            //MembersTableSeeder::class
            FarmlistsTableSeeder::class
            //LogsTableSeeder::class
            //AddsellersTableSeeder::class
            GeneralsTableSeeder::class
            //CreditsTableSeeder::class
            //ManagementTableSeeder::class
            //ReviewsTableSeeder::class
        );
    }
}
