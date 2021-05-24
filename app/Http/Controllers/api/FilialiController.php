<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\FilialeService;
use Illuminate\Http\Request;

class FilialiController extends Controller
{
    public function index(FilialeService $filialeService)
    {
        return $filialeService->filiali();
    }
}
