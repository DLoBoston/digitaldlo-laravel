<template>
    <div id="welcome" class="jumbotron">
      <h1 class="display-4">Let's get started!</h1>
      <p class="lead">
          Go Fit is a simple, effective way to track and improve your fitness.
          Start by reviewing your goals and the associated program to reach them.
          Then, <a href="" v-on:click.prevent="setPageComponent('gf-workout-form')">add a workout</a>!
      </p>
      <hr class="my-4">
      <p>
          You can always come back to see/edit what you've done.
          After you've got a few workouts under your belt, check out the
          analysis section for a deep-dive into your progress, successes,
          and areas for improvement.
      </p>
      <p class="lead">
          <a href="" class="btn btn-primary btn-lg" role="button" v-on:click.prevent="setPageComponent('gf-workout-form')">Add A Workout</a>
      </p>
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