<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// project: http://127.0.0.1:8000/nvafmzc-m1.wsr.ru/api

// auth
Route::post('login', [AuthController::class, 'login']);

// elements
Route::get('', [ElementController::class, 'elements']);

Route::middleware('auth:sanctum')->group(function () {
    // projects
    Route::get('projects', [ProjectController::class, 'all_projects']);
    Route::get('projects/{id}', [ProjectController::class, 'project']);
    Route::post('projects', [ProjectController::class, 'create_project']);
    Route::patch('projects/{id}', [ProjectController::class, 'update_project']);
});
