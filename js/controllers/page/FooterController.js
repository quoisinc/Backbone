define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel',
  'text!views/page/FooterView.html'
], function ($, _, Backbone, OwnerModel, footerTemplate) {

    return function () {
        var view = Backbone.View.extend({
            el: $("#footer"),
            initialize: function () {
                var that = this;
                var options = { query: MG.Config.User };
                var onDataHandler = function (collection) {
                    that.render();
                }
                this.model = new OwnerModel(options);
                this.model.fetch({ success: onDataHandler, dataType: "jsonp" });
            },
            render: function () {
                var data = {
                    owner: this.model.toJSON(),
                    _: _
                };
                var compiledTemplate = _.template(footerTemplate, data);
                this.$el.html(compiledTemplate).fadeIn(2000);
            }
        });
        this.init = function () {
            var v = new view();
        };
    };

});
