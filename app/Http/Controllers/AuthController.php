<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $email = $request->input("email");
        $user = User::where( 'email', $email)->first();
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            if (!$user) {
                return response()->json([
                    'type' => 'email',
                    'message' => 'Email không chính xác!',
                ], 201);
            } else {
                return response()->json([
                    'type' => 'password',
                    'message' => 'Mật khẩu không chính xác!',
                ], 201);
            }
        }

        $token = $user->createToken('token_name')->plainTextToken;
        return response()->json([
            'token' => $token, 
            'role' => $user->role,
            'user_id' => $user->id
        ], 200);
    }

    public function register (Request $request) {

    }
}
