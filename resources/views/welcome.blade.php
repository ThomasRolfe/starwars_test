<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body>
<div id="app">{!! ssr('js/server-app.js')
        ->context('characters', $characters)
        ->render()
    !!}</div>

{{--    <script src="{{ asset('js/client-app.js') }}"></script>--}}
</body>

</html>
