@extends('layouts.app')

@section('title', 'Go Fit')
@section('sub-title', "A no-nonsense fitness app to help you get (and stay) in shape")

@push('scripts-head')
    <script src="{{ URL::asset('js/vue-2.5.21.js') }}"></script>
@endpush

@section('breadcrumb')
    <li class="breadcrumb-item active" aria-current="page">Go Fit</li>
@endsection

@section('content')
    <main id="app" class="row">
        <div class="col-sm-5 col-md-4 col-lg-3">
            <ul class="list-group">
              <li class="list-group-item">Hi, D.Lo</li>
              <li class="list-group-item">Goals / Workout Program</li>
              <li class="list-group-item">Analysis</li>
              <li class="list-group-item">Workouts</li>
              <li class="list-group-item">Add Workout</li>
            </ul>
        </div>
        <div class="col">
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
        </div>
    </main>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
            },
            methods: {
            }
        })
    </script>    
@endsection