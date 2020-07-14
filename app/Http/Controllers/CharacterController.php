<?php

namespace App\Http\Controllers;

use App\Services\GetCharactersService;

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
        return view('welcome')->with('characters', $characters);

    }
}
