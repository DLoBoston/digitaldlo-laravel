<template>    
    <main class="row">
        <gf-nav></gf-nav>
        <div class="col">
            <component v-bind:is="currentPageComponent"></component>
        </div>
    </main>
</template>

<script>
    export default {
        computed: {
          currentPageComponent: function () {
            return this.$root.currentPageComponent
          }
        }
    }
</script>