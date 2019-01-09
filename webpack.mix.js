const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.copy('node_modules/iframe-resizer/js/iframeResizer.contentWindow.js', 'resources/js/iframeResizer.contentWindow.js');

mix.js(['resources/js/app.js', 'resources/js/iframeResizer.contentWindow.js'], 'public/js')
   .extract()
   .sass('resources/sass/app.scss', 'public/css');

// Version / cache-bust compiled assets
if (mix.inProduction()) {
    mix.version();
}