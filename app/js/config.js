require.config({

  // library paths go here
  paths: {
    jquery:           'vendor/jquery-1.8.3.min',
    underscore:       'vendor/underscore-1.4.4.min',
    backbone:         'vendor/backbone-1.0.0.min',
    routefilter:      'vendor/backbone.routefilter',
    mustache:         'vendor/mustache-0.7.2.min',
    bootstrap:        'vendor/bootstrap.min',
    text:             'vendor/text-2.0.6',
    templates:        'views/templates'
  },

  // shims define exports and dependency chains
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    mustache: {
      exports: 'Mustache'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },

  // use cors for loading files via requirejs -- specifically text
  config: {
    text: {
      useXhr: function (url, protocol, hostname, port) {
        return true;
      }
    }
  },

  // remove me in prod
  urlArgs: "_=" + (new Date()).getTime()
});


// load the app
require(['jquery', 'AppData', 'App'], function($, AppData, App) {

  /*
  // jquery support for cookies
  $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    options.xhrFields = {
      withCredentials:true
    };

    // jquery CSRF
    var token = $("meta[name='csrf-token']").attr('content');
    if (token) {    
      jqXHR.setRequestHeader('X-CSRF-Token', token);
    }
  });
  */

  /* 
  // zepto support for CORS
  $.ajaxSettings.beforeSend = function(xhr) {
    xhr.withCredentials = true;
  };

  // zepto CSRF
  $.ajaxSettings.headers || ($.ajaxSettings.headers = {});
  $.ajaxSettings.headers['X-CSRF-TOKEN'] = $("meta[name='csrf-token']").attr('content');
  */

  var app = new App();
});
