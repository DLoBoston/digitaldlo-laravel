<template>
    <main class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <button type="button" class="btn btn-primary" v-on:click="flip">Flip</button>
                    <button type="reset" class="btn btn-secondary" v-on:click="reset">Reset</button>
                    <span class="ml-1">What will it be &ndash; Heads or Tails?</span>
                </div>
                <div class="card-body">
                    <p class="card-text text-center" v-if="!coin_side">¯\_(ツ)_/¯</p>
                    <div class="d-flex justify-content-center" v-if="being_flipped">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <img class="w-50 rounded-circle border p-1 shadow-sm mx-auto d-block" :src="coin_side" v-if="coin_side">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        props: ['img-dir'],
        data () {
            return {
                being_flipped: false, // State of coin flip
                coin_side: null,
                img_dir: this.imgDir,
                img_heads: 'cropped-digital-dlo.jpg',
                img_tails: 'tinybeans-tails.jpg'
            }
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
    }
</script>
