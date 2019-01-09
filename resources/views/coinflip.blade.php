@extends('layouts.app')

@section('title', 'Coin Flip')
@section('sub-title', "For all of life's tough decisions")

@section('breadcrumb')
    <li class="breadcrumb-item active" aria-current="page">Coin Flip</li>
@endsection

@section('content')
    <main id="app" class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <button type="button" class="btn btn-primary" v-on:click="flip">Flip</button>
                    <button type="reset" class="btn btn-secondary" v-on:click="reset">Reset</button>
                    <span class="ml-1">What will it be &ndash; Heads or Tails?</span>
                </div>
                <div class="card-body">
                    <p class="card-text text-center" v-if="!coin_side">¯\_(ツ)_/¯</p>
                    <div class="d-flex justify-content-center" v-if="being_flipped">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <img class="w-50 rounded-circle border p-1 shadow-sm mx-auto d-block" :src="coin_side" v-if="coin_side">
                </div>
            </div>
        </div>
    </main>
@endsection