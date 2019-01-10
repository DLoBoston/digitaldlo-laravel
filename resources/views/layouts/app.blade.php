<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        <title>Digital D.Lo - @yield('title')</title>
    </head>
  <body>
      <div id="app" class="container-fluid">
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
        @yield('content')
      </div>
      <script src="{{ mix('/js/manifest.js') }}"></script>
      <script src="{{ mix('/js/vendor.js') }}"></script>
      <script src="{{ mix('/js/app.js') }}"></script>
  </body>
</html>
