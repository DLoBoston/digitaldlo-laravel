
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        being_flipped: false, // State of coin flip
        coin_side: null,
        img_dir: '{{ URL::asset("img") }}',
        img_heads: 'cropped-digital-dlo.jpg',
        img_tails: 'tinybeans-tails.jpg'
    },
    methods: {

        // Flipping a coin resets the previous coin, shows a spinner,
        // determines the next coin to display, and then waits briefly before displaying
        flip: function() {
            this.being_flipped = true;
            this.coin_side = null;
            var img = ((Math.floor((Math.random() * 2) + 1)) % 2 == 0) ? this.img_heads : this.img_tails;
            setTimeout(this.display_coin.bind(null, img), 1000);
        },

        // Simply display coin
        display_coin: function(img) {
            console.log(img);
            this.coin_side = this.img_dir + '/' + img;
            this.being_flipped = false;
        },

        reset: function() {
            this.coin_side = null;
        }
    }
});
