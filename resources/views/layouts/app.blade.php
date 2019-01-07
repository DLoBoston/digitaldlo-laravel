<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="{{ URL::asset('css/bootstrap-4.2.1.min.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('css/dd-custom.css') }}">
	<script src="{{ URL::asset('js/iframeResizer.contentWindow-3.6.3.min.js') }}"></script>
        @stack('scripts-head')
        <title>Digital D.Lo - @yield('title')</title>
    </head>
  <body>
      <div class="container-fluid">
        <header>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('/')}}">Apps Home</a></li>
                @yield('breadcrumb')
              </ol>
            </nav>
            <h1>
                @yield('title')
                <small class="text-muted">@yield('sub-title')</small>
            </h1>
        </header>
        <main class="row">
            <div class="col">
                @yield('content')
            </div>
        </main>
      </div>
        <script src="{{ URL::asset('js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ URL::asset('js/popper-1.14.6.min.js') }}"></script>
        <script src="{{ URL::asset('js/bootstrap-4.2.1.min.js') }}"></script>
  </body>
</html>
