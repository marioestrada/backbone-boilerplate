define([
  'mustache',
  'backbone',
  'text!templates/Index.html'
], function (Mustache, Backbone, IndexTemplate) {

  var IndexView = Backbone.View.extend({

    template: Mustache.compile(IndexTemplate),

    events: {
    },

    initialize: function() {
    },

    render: function() {
      this.$el.html( this.template() );
    }

  });

  return IndexView;
});
