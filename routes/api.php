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
    $user->farmname = "テスト";
    $user->name = $request->name;
    $user->kana = "テスト";
    $user->email = "test@eccccomp.com";
    $user->email_verified_at = now();
    $user->password = Hash::make("password");
    $user->postcode = 5300000;
    $user->pref = "テスト";
    $user->municipality = "テスト";
    $user->building = "テスト";
    $user->TEL = 0120111111;
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

/**商品の追加 */
Route::post('/goodsadd', function (Request $request){
    $gadd = new App\farmlist();
    $gadd->farmname = $request->farmname;
    $gadd->goodsname = $request->goodsname;
    $gadd->quantity = $request->quantity;
    $gadd->expired = $request->expired;
    $gadd->carriage = $request->carriage;
    $gadd->burden = $request->burden;
    $gadd->howcarri = $request->howcarri;
    $gadd->carridays = $request->carridays;
    $gadd->carriarea = $request->carriarea;
    $gadd->pesticides = $request->pesticides;
    $gadd->detail = $request->detail;
    $gadd->category_id = $request->category_id;
    $gadd->photo = $request->photo;
    $gadd->profit = $request->profit;
    $gadd->state = TRUE;
    $gadd->members_id = $request->members_id;
    $gadd->save();
    return response("OK", 200);
});