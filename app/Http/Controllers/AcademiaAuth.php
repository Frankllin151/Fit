<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AcademiaAuth extends Controller
{
    //

    public function AuthCadastro(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        print_r($password);

    }
}
