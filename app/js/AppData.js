define([
  'module', 
  'backbone', 
  'Router',
  'collections/Models'
], function(module, Backbone, Router, Models) {
  
  // Shared data store for views
  var AppData = {
    Router: new Router(),
    Models: new Models()
  } 

  // module.config() allows for bootstrapping data into the app
  try {
    var config = module.config();
    if (config) {
      // retrieve values out of the config here
    }
  } catch (e) {}

  window.AppData = AppData;

  return AppData;
});