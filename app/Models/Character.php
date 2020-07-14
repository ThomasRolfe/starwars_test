<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name',
        'height',
        'hair_colour',
        'eye_colour',
        'skin_colour',
        'birth_year',
        'gender'
    ];
}
