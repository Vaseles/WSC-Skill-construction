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

    public function update(Request $request, $id) {
        $element = Element::find($id);

        if ($element) {

            $element->name = $request->name;
            $element->width = $request->width;
            $element->height = $request->height;
            $element->is_basis = $request->is_basis;
            $element->svg = $request->svg;
            $element->save();
    
            return response()->json([
                'data' => [
                    'id' => $id,
                    'name' => $element->name,
                ]
            ],200);
           } else {
            return response()->json([
                'errors' => [
                    'element' => 'Element not found'
                ]
            ], 404);
           }
    }
}
