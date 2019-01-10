@extends('layouts.app')

@section('title', 'Go Fit')
@section('sub-title', "A no-nonsense fitness app to help you get (and stay) in shape")

@section('breadcrumb')
    <li class="breadcrumb-item active" aria-current="page">Go Fit</li>
@endsection

@section('content')
    <go-fit></go-fit>
@endsection