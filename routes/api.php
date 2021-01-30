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

Route::get('/fgoods', 'app\Http\Controllers\GoodsController@index');
/*　農家ユーザーの一覧表示*/
Route::get('/users',function (Request $request){
    $users = App\member::all();
    return response()->json(['users' => $users]);
});

/**農家ユーザーの追加 */
Route::post('/users', function (Request $request){
    $user = new App\member();
    $user->account_name = $request->account_name;
    $user->farmname = $request->farmname;
    $user->name = $request->name;
    $user->kana = $request->kana;
    $user->email = $request->email;
    $user->email_verified_at = now();
    $user->password = Hash::make($request->password);
    $user->postcode = $request->postcode;
    $user->pref = $request->pref;
    $user->municipality = $request->municipality;
    $user->building = $request->building;
    $user->TEL = $request->TEL;
    $user->save();
    return response("OK", 200);
});

/**農家ユーザーの削除 */
Route::delete('/users/{id}',function (Request $request, $id){
    App\member::find($id)->delete();
    return response("OK", 200);
});

/**農家ユーザー詳細表示 */
Route::get('/user/{user}',function(App\member $user){
    return response()->json(['user' => $user]);
});

/*　商品の一覧表示*/
Route::get('/goods',function (Request $request){
    $goods = App\farmlist::all();
    return response()->json(['goods' => $goods]);
});

/**商品詳細表示 */
Route::get('/good/{good}',function(App\farmlist $good){
    return response()->json(['good' => $good]);
});

/**一般ユーザーの追加 */
Route::post('/gusers', function (Request $request){
    $user = new App\general();
    $user->account_name = $request->account_name;
    $user->name = $request->name;
    $user->kana = $request->kana;
    $user->email = $request->email;
    $user->email_verified_at = now();
    $user->password = Hash::make($request->password);
    $user->postcode = $request->postcode;
    $user->pref = $request->pref;
    $user->municipality = $request->municipality;
    $user->building = $request->building;
    $user->TEL = $request->TEL;
    $user->save();
    return response("OK", 200);
});

/**クレジットカードの追加 */
Route::post('/creditadd', function (Request $request){
    $credit = new App\credit();
    $credit->cardnum = $request->cardnum;
    $credit->cardname = $request->cardname;
    $credit->month = $request->month;
    $credit->year = $request->year;
    $credit->securitycode = $request->securitycode;
    $credit->user_id = 1;
    $credit->save();
    return response("OK", 200);
});

/*　クレジットの一覧表示*/
Route::get('/credits',function (Request $request){
    $credits = App\credit::all();
    return response()->json(['credits' => $credits]);
});