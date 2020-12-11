<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'],function(){
    Route::post('del', 'UserController@deleteUser');
});

Route::get('/users',function (Request $request){
    $users = App\member::all();
    return response()->json(['users' => $users]);
});

Route::post('/users', function (Request $request){
    $user = new App\member();
    $user->name = $request->name;
    $user->kana = "テスト";
    $user->password = Hash::make("password");
    $user->postcode = 5300000;
    $user->pref = "テスト";
    $user->municipality = "テスト";
    $user->building = "テスト";
    $user->email = "テスト@eccccomp.com";
    $user->email_verified_at = now();
    $user->TEL = 01201111111;
    $user->part_id = 1;
    $user->pay_id = 1;
    $user->save();
    return response("OK", 200);
});

Route::delete('/users/{id}',function (Request $request, $id){
    App\member::find($id)->delete();
    return response("OK", 200);
});

Route::get('/user/{user}',function(App\member $user){
    return response()->json(['user' => $user]);
});