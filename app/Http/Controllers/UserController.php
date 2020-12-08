<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\member;

class UserController extends Controller
{
    //getUsers
    public function getUsers(){
        $users = member::all();
        return $users;
    }

    //adduser
    public function addUser(Request $request)
    {
       $user = new Todo;
       $user->name = $request->name;
       $user->kana = $request->kana;
       $user->kana = $request->kana;
       $user->kana = $request->kana;
       $user->kana = $request->kana;
       $user->kana = $request->kana;
       $user->kana = $request->kana;
       $user->email = $request->email;
       $user->TEL = $request->TEL;
       $user->save();

       $users = Todo::all();
       return $users;
    }
}
