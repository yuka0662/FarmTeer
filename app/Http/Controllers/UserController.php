<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\member;

class UserController extends Controller
{
    //adduser
    public function addUser(Request $request)
    {
       $user = new member;
       $user->name = $request->name;
       /*
       $user->kana = $request->kana;
       $user->password = Hash::make($request->password);
       $user->postcode = $request->postcode;
       $user->pref = $request->pref;
       $user->municipality = $request->municipality;
       $user->building = $request->building;
       $user->email = $request->email;
       $user->email_verified_at = now();
       $user->TEL = $request->TEL;
       $user->part_id = $request->part_id;
       */
       $user->save();

       $users = member::all();
       return $users;
    }
}
