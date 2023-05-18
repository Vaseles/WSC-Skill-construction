<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementResource;
use App\Models\Element;
use Illuminate\Http\Request;

class ElementController extends Controller
{
    public function elements(Request $request) {
        return response([
            'data' =>ElementResource::collection(Element::all())
        ], 200);
    }
}
