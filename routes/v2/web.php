<?php

use App\Http\Controllers\v2\DashboardController;
use App\Http\Controllers\v2\ProfileController;
use App\Http\Controllers\v2\ProjectController;
use App\Http\Controllers\v2\TaskController;
use App\Http\Controllers\v2\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/v2/dashboard');
Route::prefix('v2')->group(function () {
    Route::redirect('/', '/v2/dashboard');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::resource('projects', ProjectController::class);
        Route::resource('tasks', TaskController::class);
        Route::get('my-tasks', [TaskController::class, 'myTasks'])
            ->name('tasks.myTasks');
        Route::resource('users', UserController::class);
    });

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__ . '/auth.php';
});

