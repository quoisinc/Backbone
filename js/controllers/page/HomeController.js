define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/weather/View1Controller',
  'controllers/sections/View2Controller',
  'controllers/sections/View3Controller',
  'text!views/page/HomeView.html'
], function ($, _, Backbone, View1Controller, View2Controller, View3Controller, HomeView) {

    var view = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            this.$el.html(HomeView);
            var view1 = new View1Controller();
            view1.render();
            var view2 = new View2Controller();
            view2.render();
            var view3 = new View3Controller();
            view3.render();
        }
    });
    return view;
});
