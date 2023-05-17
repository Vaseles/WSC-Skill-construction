<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        if (!User::where('login', $request->login)->first()) {
            // Add New User
            $user = User::create([
                'login' => $request->login,
                'pin' => $request->pin
            ]);

            if ($user) {
                return response()->json([
                    'token' => $user->createToken($user->login)->plainTextToken
                ], 200);
            }
        }

        // Login User
        if (User::where('login', $request->login)->where('pin', $request->pin)->first()) {
            $user = User::where('login', $request->login)->first();

            return response()->json([
                'data' => [
                    'token' => $user->createToken($user->login)->plainTextToken
                ],
            ], 200);
        } else {
            // Error (fuck**g pin)
            return response()->json([
                'errors' => [
                    'pin' => 'Incorrect pin-code'
                ]
            ], 422);
        }
    }
}
