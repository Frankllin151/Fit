<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AcademiaAuth extends Controller
{
    //

    public function registerUser(Request $request)
    {
        $data = $request->json()->all();
 
     return response()->json(['message' => 'Usuário cadastrado com sucesso'], 200);

    }
}
