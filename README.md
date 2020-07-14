##Star Wars Characters


<p>Basic fetching of first page of Star Wars Characters</p>
<p>API: <a href="https://swapi.dev/api/people/">swapi.dev</a></p>

##Installation

Set up environment file:
```
APP_ENV=production
DB_CONNECTION=sqlite
DB_DATABASE=(point to local database/database.sqlite) (or use mysql)
CACHE_DRIVER=database
NODE_PATH=node
```

Run the following commands:
```
composer install
npm install
npm run dev
```

##Accessing the app
<p>The app makes use of the spatie/laravel-server-side-rendering package to allow server side rendering. There is a known issue whereby this will not run with php artisan serve.</p>
<p>In order to serve this locally, you will need to use homestead, valet or some other local development environment</p>

