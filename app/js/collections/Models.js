define(['backbone', 'models/Model'], function(Backbone, Model) {

  var Models = Backbone.Collection.extend({
    model: Model,
  });

  return Models;
});