<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant;
class ParticipantController extends Controller
{
    //getParticipant
    public function getParticipant(){
        return response()->json(participant::all(),200);
    }

    //getParticipantById
    public function getParticipantById($id){
        $participant = Participant::find($id);
        if(is_null($participant)){
            return response()->json(['message' => 'Participant introuvable'],404); 
        }
        return response()->json(Participant::find($id),200);
    }

    //add Participant
    public function addParticipant(Request $request){
        $participant = Participant::create($request->all());
        return response()->json($participant,201);
    }

    //update Participant
    public function updateParticipant(Request $request, $id){
        $participant = Participant::find($id);
        if(is_null($participant)){
            return response()->json(['message' => 'Participant introuvable'],404); 
        }
        $participant->update($request->all());
        return response($participant,200);
    }

    //delete Participant
    public function deleteParticipant(Request $request, $id){
        $participant = Participant::find($id);
        if(is_null($participant)){
            return response()->json(['message' => 'Participant introuvable'],404); 
        }
        $participant->delete();
        return response(null,204);
    }
}
