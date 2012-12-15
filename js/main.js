require.config({
    paths: {
        text: '../libs/plugins/text',
        jquery: '../libs/jquery/182/jquery-min',
        underscore: '../libs/backbone/092/underscore-min',
        backbone: '../libs/backbone/092/backbone-min'
    }
});

define([
  'jquery',
  'underscore',
  'backbone',
  'app', 
], function ($, _, Backbone, App) {
    App.initialize();
});
