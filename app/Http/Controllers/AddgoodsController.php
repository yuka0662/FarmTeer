<?php

namespace App\Http\Controllers;

use App\farmlist;

use Illuminate\Http\Request;

class AddgoodsController extends Controller
{
    public function index(){
        return farmlist::all();
    }

    public function addindex(){
        
    }
}
