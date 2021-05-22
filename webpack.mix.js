const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]).vue();

mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8080,
    },
});

mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    },
});


