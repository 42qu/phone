(function() {

  requirejs.config({
    baseUrl: '/js/',
    shim: {
      backbone: {
        deps: ['underscore', 'jquery']
      },
      jquery_mobile: ['jquery'],
      jquery_tmpl: ['jquery'],
      index: ['jquery', 'jquery_mobile', 'jquery_tmpl']
    },
    paths: {
      jquery: 'jquery/1.7.2',
      underscore: 'underscore/1.3.3',
      jquery_mobile: 'jquery.mobile/1.1.0',
      jquery_tmpl: 'jquery.tmpl/1.0',
      backbone: 'backbone/0.9.2'
    }
  });

  require(['jquery', 'underscore', 'jquery_mobile', 'jquery_tmpl', 'backbone', 'index']);

}).call(this);
