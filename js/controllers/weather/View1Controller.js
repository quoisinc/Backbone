define([
  'jquery',
  'underscore',
  'backbone',
  'models/WeatherModel',
  'text!views/page/View1.html'
], function ($, _, Backbone, WeatherModel, View) {

    var view = Backbone.View.extend({
        el: $(".view1"),

        initialize: function () {
            var _this = this;
            var options = { query: MG.Config.Zipcode }
            var onDataHandler = function (collection, req) {
                _this.render();
            }
            this.model = new WeatherModel(options);
            this.model.fetch({ success: onDataHandler, dataType: "jsonp" });
        },
        render: function () {
            var data = {
                weather: this.model.toJSON(),
                _: _
            };
            var compiledTemplate = _.template(View, data);
            $(".view1").html(compiledTemplate).fadeIn(2000);
        }

    });

    return view;
  
});
