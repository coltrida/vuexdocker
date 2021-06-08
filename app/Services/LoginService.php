<?php


namespace App\Services;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginService
{
    public function login($request)
    {
        $user = User::with('ruolo', 'recapito')->where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                'message' => ['Le Credenziali non corrispondono'],
                'stato' => 'errore'
            ];
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
            'stato' => 'successo'
        ];
    }
}
