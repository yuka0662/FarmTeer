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
}
