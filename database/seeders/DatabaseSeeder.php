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
            'email' => 'ysamer2525@gmail.com',
            'password' => Hash::make('Yahya@2525'),
            'email_verified_at' => now(),
            'role' => 'admin',
            'remember_token' => 'c0jtWRYvTm',
        ]);
    }
}
