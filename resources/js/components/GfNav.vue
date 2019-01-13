<template>
    <div class="col-sm-5 col-md-4 col-lg-3">
        <div class="list-group">
          <a href="" class="list-group-item list-group-item-action" v-on:click.prevent="setPageComponent('gf-welcome')">Hi, D.Lo</a>
          <a href="" class="list-group-item list-group-item-action" v-on:click.prevent="setPageComponent('gf-program')">Goals / Program</a>
          <a href="" class="list-group-item list-group-item-action" v-on:click.prevent="setPageComponent('gf-workouts')">Workouts</a>
          <a href="" class="list-group-item list-group-item-action" v-on:click.prevent="setPageComponent('gf-analysis')">Analysis</a>
          <a href="" class="list-group-item list-group-item-action" v-on:click.prevent="setPageComponent('gf-workout-form')">Add A Workout</a>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            setPageComponent: function(component) {
                this.$root.setPageComponent(component);
            }
        }
    }
</script>