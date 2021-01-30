<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class addseller extends Model
{
    protected $fillable = [
        'farmname',
        'email',
        'postcode',
        'pref',
        'municipality',
        'building'
    ];
}
