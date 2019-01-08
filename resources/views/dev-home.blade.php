@extends('layouts.app')

@section('content')
    <div class="card-deck">

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Coin Flip</h5>
                <h6 class="card-subtitle mb-2 text-muted">For all of life's tough decisions</h6>
                <p class="card-text">Leverages Laravel, Vue.js, and Bootstrap.</p>
                <a href="{{ route('coinflip') }}" class="btn btn-primary">Check it out!</a>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Go Fit</h5>
                <h6 class="card-subtitle mb-2 text-muted">A fitness app to help you get (and stay) in shape.</h6>
                <p class="card-text"></p>
                <a href="{{ route('gofit') }}" class="btn btn-primary">Work in progress&hellip;</a>
            </div>
        </div>
        
    </div>
@endsection