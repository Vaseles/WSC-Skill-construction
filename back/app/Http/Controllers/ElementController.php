<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementResource;
use Illuminate\Http\Request;

class ElementController extends Controller
{
    public function elements(Request $request) {
        return response([
            // 'data' =>ElementResource::collection(E)
        ], 200);
    }
}
