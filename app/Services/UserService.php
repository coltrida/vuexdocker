<?php


namespace App\Services;

use App\Models\User;

class UserService
{
    public function audio()
    {
        return User::audio()->orderBy('name')->get();
    }

    public function amm()
    {
        return User::amm()->orderBy('name')->get();
    }

    public function aggiungi($request)
    {
        $new = new User();
        $new->name = $request->name;
        $new->email = $request->email;
        $new->ruolo_id = $request->ruolo_id;
        $new->save();
        return $new;
    }

    public function elimina($id)
    {
        return User::find($id)->delete();
    }
}
