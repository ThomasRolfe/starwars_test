<?php

namespace App\Http\Controllers;

use App\Services\GetCharactersService;
use Illuminate\Http\Request;

class CharacterController extends Controller
{

    protected $getCharactersService;

    public function __construct(GetCharactersService $getCharactersService)
    {
        $this->getCharactersService = $getCharactersService;
    }

    public function index()
    {

        $characters = $this->getCharactersService->get();
        dd($characters);
        return view('welcome')->with('characters', $characters);

    }
}
