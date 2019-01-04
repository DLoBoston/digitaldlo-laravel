<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="{{ URL::asset('css/bootstrap-4.2.1.min.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('css/dd-custom.css') }}">
        @stack('scripts-head')
        <title>Digital D.Lo - @yield('title')</title>
    </head>
  <body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="//{{ $_SERVER['HTTP_HOST'] }}">
                <img src="{{ URL::asset('img/cropped-digital-dlo.jpg') }}" width="30" height="30" class="d-inline-block align-top" alt="Digital D.Lo - the man, the myth, the legend">
                Digital D.Lo
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="//{{ $_SERVER['HTTP_HOST'] }}">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="//{{ $_SERVER['HTTP_HOST'] }}/portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{ url('/')}}">Dev</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="//{{ $_SERVER['HTTP_HOST'] }}/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://github.com/DLoBoston">GitHub</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://twitter.com/DLoBoston">Twitter</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.linkedin.com/in/dlonigro">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
      <div class="container">
        <main class="row">
            <div class="col">
                <h2>
                    @yield('title')
                    <small class="text-muted">@yield('sub-title')</small>
                </h2>
                @yield('content')
            </div>
        </main>
        <footer class="row">
            <div>
                <div class="col">
                    <p>&copy; <?= date('Y') ?> Digital D.Lo | A creative, full-stack (LAMP + JS) developer and IT professional.</p>
                </div>
            </div>
        </footer>
      </div>
        <script src="{{ URL::asset('js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ URL::asset('js/popper-1.14.6.min.js') }}"></script>
        <script src="{{ URL::asset('js/bootstrap-4.2.1.min.js') }}"></script>
  </body>
</html>
