<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('members')->insert([
            [
                'account_name' => 'やさやさ',
                'farmname' => 'ヤサイヨシコ',
                'name' => '野菜好子',
                'kana' => 'ヤサイヨシコ',
                'email' => 'yasaiyoshiko@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'postcode' => 530015,
                'pref' => '大阪',
                'municipality' => '大阪市北区中崎西',
                'building' => 'ECCコンピュータ専門学校',
                'TEL' => 0120444444,
            ],
            [
                'account_name' => '尾中',
                'farmname' => 'スイタ農場',
                'name' => '尾中推太',
                'kana' => 'オナカスイタ',
                'email' => 'onakasuita@icloud.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password1'),
                'postcode' => 5220341,
                'pref' => '滋賀',
                'municipality' => '犬上郡多賀町多賀６０１',
                'building' => '糸切餅総本家 多賀や',
                'TEL' => 0120444554,
            ],
            [
                'account_name' => 'コカ',
                'farmname' => 'コカ農園',
                'name' => 'コカ・綾鷹・コーラ',
                'kana' => 'コカ・アヤタカ・コーラ',
                'email' => 'cocayatakacola@docomo.ne.jp',
                'email_verified_at' => now(),
                'password' => Hash::make('password2'),
                'postcode' => 1076211,
                'pref' => '東京都',
                'municipality' => '港区赤坂九丁目7番1号',
                'building' => 'ミッドタウン・タワー',
                'TEL' => 0120321555,
            ],
        ]);
    }
}
