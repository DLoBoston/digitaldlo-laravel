@extends('layouts.app')

@section('title', 'Coin Flip')
@section('sub-title', "For all of life's tough decisions")

@section('breadcrumb')
    <li class="breadcrumb-item active" aria-current="page">Coin Flip</li>
@endsection

@section('content')
    <coin-flip></coin-flip>
@endsection