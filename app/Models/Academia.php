<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Academia extends Model
{
    use HasFactory;

    protected $table = ['academias'];

    protected $fillable = [
    'id',
    'name',
    'email',
    'cpf',
    'password',
    'andress',
    'phone',
    'token_login'



];






}

