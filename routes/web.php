<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}/{any2?}/{any3?}', function () {
    return view('welcome');
})->name('welcome');
