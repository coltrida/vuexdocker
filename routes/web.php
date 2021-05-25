<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}/{any2?}', function () {
    return view('welcome');
});
