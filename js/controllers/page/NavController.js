define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/page/NavView.html'
], function ($, _, Backbone, NavView) {

    var view = Backbone.View.extend({
        el: $("#nav"),
        render: function () {
            this.$el.html(NavView);
            $('.menu li').click(function () {
                var _this = this;
                $('.views').hide();
                $('.' + $(this).attr('view')).show();
                $('.menu li').removeClass('active');
                $(this).addClass('active');
            });
        }
    });

    return view;

});
