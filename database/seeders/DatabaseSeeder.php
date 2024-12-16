<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Yahya (Logic4IT)',
            'email' => 'yahya@test.com',
            'password' => Hash::make('12345678'),
            'email_verified_at' => now(),
            'role' => 'admin',
            'remember_token' => 'c0jtWRYvTm',
        ]);

        User::factory()->create([
            'name' => 'Mohammed',
            'email' => 'mohammed@test.com',
            'password' => Hash::make('12345678'),
            'email_verified_at' => now(),
            'role' => 'user',
        ]);
        
        User::factory()->create([
            'name' => 'Hamza',
            'email' => 'hamza@test.com',
            'password' => Hash::make('12345678'),
            'email_verified_at' => now(),
            'role' => 'user',
        ]);
    }
}
