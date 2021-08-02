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

    public function register($request)
    {
        $user = User::with('ruolo', 'recapito')->where('email', $request->email)->first();

        if (!$user) {
            return [
                'message' => ['Utente inesistente'],
                'stato' => 'errore'
            ];
        }

        if ($request->repeatpassword <> $request->password) {
            return [
                'message' => ['Le Password non coincidono'],
                'stato' => 'errore'
            ];
        }

        $user->cleanpassword = $request->password;
        $user->password = Hash::make($request->password);
        $user->save();
        $user = User::with('ruolo', 'recapito')->where('email', $request->email)->first();

        $token = $user->createToken('my-app-token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
            'stato' => 'successo'
        ];
    }
}
