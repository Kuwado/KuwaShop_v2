<?php

namespace App\Services;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;

class ProfileService
{
    public function createUser(array $data) 
    {
        try {
            $user = new User();
            $user->email = $data['email'];
            $user->password = Hash::make($data['password']);
            $user->role = $data['role'] ?? 'user';
            $user->save();
            return $user;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi tạo user: ' . $e->getMessage());
        }
    }

    public function createProfile(array $data) 
    {
        try {
            $profile = new Profile();
            $profile->fill($data);

            $profile->save();
            return $profile;
        } catch (QueryException $e) {
            throw new \Exception('Lỗi tạo prfile: ' . $e->getMessage());
        }
    }

    public function getProfile()
    {
        
    }


}