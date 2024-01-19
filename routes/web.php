<?php

use App\Http\Controllers\AcademiaAuth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthAcademiaController;
use App\Http\Controllers\AlunoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Main
Route::get('/', [HomeController::class, 'indexHome'])->name('home');

Route::post('/academia/cadastra' , [AcademiaAuth::class , 'AuthCadastro' ])->name('cadastra');