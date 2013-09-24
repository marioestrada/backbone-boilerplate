define([
  'jquery',
  'underscore',
  'mustache',
  'backbone',
  'AppData',
  'text!templates/App.html'
], function ($, _, Mustache, Backbone, AppData, AppTemplate) {

  var App = Backbone.View.extend({

    el: '#app',

    template: Mustache.compile(AppTemplate),

    events: {
    },

    initialize: function() {
      this.render();

      Backbone.history.start({ pushState: true });
    },

    render: function() {
      this.$el.html( this.template() );
    }

  });

  return App;
});
