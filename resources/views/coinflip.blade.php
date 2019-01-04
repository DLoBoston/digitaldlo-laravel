@extends('layouts.app')

@section('title', 'Coin Flip')
@section('sub-title', "For all of life's tough decisions")

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                  What will it be &ndash; Heads or Tails?
                </div>
                <div class="card-body">
                    <p class="card-text text-center">¯\_(ツ)_/¯</p>
                    <a href="#" class="btn btn-primary">Flip</a>
                </div>
            </div>
        </div>
    </div>
@endsection