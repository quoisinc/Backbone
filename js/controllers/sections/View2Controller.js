define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/page/View2.html'
], function ($, _, Backbone, View) {

  var view = Backbone.View.extend({
      el: $(".view2"),

    render: function () {
        $(".view2").html(View);
    }

  });

  return view;
  
});
