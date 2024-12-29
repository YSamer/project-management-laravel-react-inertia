<?php

use Illuminate\Support\Facades\Route;


require __DIR__ . '/v2/auth.php';
require __DIR__ . '/v2/web.php';

Route::redirect('/', '/v2/dashboard');
