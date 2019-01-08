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
              <li class="list-group-item disabled">Hi, D.Lo</li>
              <li class="list-group-item disabled">Goals / Program</li>
              <li class="list-group-item disabled">Workouts</li>
              <li class="list-group-item disabled">Analysis</li>
              <li class="list-group-item disabled">Add A Workout</li>
            </ul>
        </div>
        <div class="col">
            <div id="welcome" class="jumbotron">
              <h1 class="display-4">Let's get started!</h1>
              <p class="lead">
                  Go Fit is a simple, effective way to track and improve your fitness.
                  Start by reviewing your goals and the associated program to reach them.
                  Then, <a href="#" class="disabled">add a workout</a>!
              </p>
              <hr class="my-4">
              <p>
                  You can always come back to see/edit what you've done.
                  After you've got a few workouts under your belt, check out the
                  analysis section for a deep-dive into your progress, successes,
                  and areas for improvement.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg disabled" href="#" role="button">Add A Workout</a>
              </p>
            </div>
            <h2>Workouts</h2>
            <div class="table-responsive">
                <table id="workouts" class="table">
                    <thead>
                        <tr>
                          <th scope="col">Workout</th>
                          <th scope="col">Cycle</th>
                          <th scope="col">Date</th>
                          <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h3 class="text-nowrap">Cardio</span></h3>
                            <td>
                                <div class="text-nowrap">
                                    <span class="badge badge-secondary">Week 1</span>
                                    <span class="badge badge-secondary">Day 2</span>
                                </div>
                                <span class="badge badge-info">Cycle 1</span>
                            </td>
                            <td>2019/01/01</td>
                            <td>
                                <div class="text-nowrap">
                                    <button type="button" class="btn btn-info">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><h3 class="text-nowrap">531 Bench</h3></td>
                            <td>
                                <div class="text-nowrap">
                                    <span class="badge badge-secondary">Week 1</span>
                                    <span class="badge badge-secondary">Day 1</span>
                                </div>
                                <span class="badge badge-info">Cycle 1</span>
                            </td>
                            <td>2018/12/28</td>
                            <td>
                                <div class="text-nowrap">
                                    <button type="button" class="btn btn-info">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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