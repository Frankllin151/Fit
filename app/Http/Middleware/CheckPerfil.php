<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\LoginRgAcademia;
class CheckPerfil
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, $perfil)
    {
        $id = 0;
        // Verifique se o usuário está autenticado
        $loginAuth = new LoginRgAcademia;
        $loginAuth->dasboardAcademia($id);

        // Redirecione para uma página de acesso negado ou faça o que for apropriado
        return 'acesso negado';
}

}