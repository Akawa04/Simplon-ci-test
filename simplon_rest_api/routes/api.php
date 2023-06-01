<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ParticipantController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// get all participants
Route::get('Participants',[ParticipantController::class,'getParticipant']);
//get participant by Id
Route::get('Participant/{id}',[ParticipantController::class,'getParticipantById']);
//add participant 
Route::post('addParticipant',[ParticipantController::class,'addParticipant']);
//update participant by Id
Route::put('updateParticipant/{id}',[ParticipantController::class,'updateParticipant']);
//delete participant by Id
Route::delete('deleteParticipant/{id}',[ParticipantController::class,'deleteParticipant']);