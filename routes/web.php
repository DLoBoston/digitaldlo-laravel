<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dev-home');
});

Route::get('/coinflip', function () {
    return view('coinflip');
})->name('coinflip');

Route::get('/gofit', function () {
    return view('gofit');
})->name('gofit');
