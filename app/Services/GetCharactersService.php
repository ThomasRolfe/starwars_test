<?php


namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class GetCharactersService
{
    public function get()
    {
        return Cache::remember('characters', 120, function () {
            return $this->fetchCharactersFromApi();
        });
    }

    public function fetchCharactersFromApi()
    {
        $response = Http::get('https://swapi.dev/api/people/');

        if ($response->failed()) {
            throw new Exception('Unable to fetch data from API. Please try again.', $response->status());
        }

        return json_decode($response->body())->results;
    }
}
