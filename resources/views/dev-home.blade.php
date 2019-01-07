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
                <h5 class="card-title">Have You</h5>
                <h6 class="card-subtitle mb-2 text-muted">Never forget a recurring event again</h6>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary disabled">Coming soon&hellip;</a>
            </div>
        </div>
        
    </div>
@endsection