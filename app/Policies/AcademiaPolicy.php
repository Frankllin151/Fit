<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Academia;

class AcademiaPolicy
{
    /**
     * Create a new policy instance.
     */
    public function view(User $user, Academia $academia)
    {
        return $user->id === $academia->user_id;
    }
    
    // Use a política de acesso em seu controlador
    public function show(Academia $academia)
    {
        $this->authorize('view', $academia);
    
        // Se a política passar, o usuário tem permissão para acessar a academia
        return view('academia.show', ['academia' => $academia]);
    }
}
