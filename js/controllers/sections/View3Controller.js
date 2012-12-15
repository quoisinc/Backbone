define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/page/View3.html'
], function ($, _, Backbone, View) {

  var view = Backbone.View.extend({
      el: $(".view3"),

    render: function () {
        $(".view3").html(View);
    }

  });

  return view;
  
});
