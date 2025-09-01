<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request)
    {
        // Validate dữ liệu từ React
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'status' => false,
                'message' => 'Email hoặc mật khẩu không đúng',
            ], 401);
        }

        return response()->json([
            'status' => true,
            'message' => 'Đăng nhập thành công',
            'user'   => Auth::user(),
            'token'  => $request->user()->createToken('API Token')->plainTextToken
        ]);
        
    }

    public function logout(request $request)
    {
        $user = User::find(Auth::user()->id);
        $user->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Đăng xuất thành công',
        ]);
    }
}
