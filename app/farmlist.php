<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class farmlist extends Model
{
    protected $fillable = [
        'goodsname',
        'price',
        'carriage',
        'profit',
        'quantity',
        'derail',
        'category_id',
        'photo',
        'members_id',
    ];
}
