<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;
    protected $table = ['alunos'];

    protected $fillable = [
        'id',
        'token_login',
        'email',
        'name',
        'password',
        'created_at',
        'updated_at'
    ];



}
