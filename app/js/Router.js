define([
  'jquery',
  'underscore', 
  'routefilter',
  'views/IndexView'
], function($, _, routefilter, IndexView) {

  var Router = Backbone.Router.extend({

    routes: {
      // add routes here

      // catch-all for invalid paths
      "": "showIndex" 
    },

    initialize: function() {
    },

    // this is managed by the backbone plugin, backbone.routefilter
    before: function(route, param) {
      return true;
    },

    showIndex: function() {
      this.setCurrentView( new IndexView() );
    },

    setCurrentView: function(view) {
      if (this.currentView) {
        this.currentView.remove();
        this.currentView = null;
      }

      this.currentView = view;
      this.currentView.render();
      this.currentView.$el.appendTo('#current-view');
    }

  });

  return Router;
});
