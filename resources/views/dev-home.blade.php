@extends('layouts.app')

@section('title', 'Welcome to the Dev Playground')

@section('content')
    <p>Proof-of-concept, experimental development.</p>
    <ul>
        <li><a href="{{ route('coinflip') }}">Coin Flip</a> - For all of life's tough decisions. (Coming soon&hellip;)</li>
        <li>Have You - Never forget a recurring event again. (Coming soon&hellip;)</li>
    </ul>
@endsection