<?php

namespace App\Http\Controllers;

use App\farmlist;
use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function index()
    {
        return farmlist::all();
    }
}
