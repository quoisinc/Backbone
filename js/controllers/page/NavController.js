define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/page/NavView.html'
], function ($, _, Backbone, NavView) {

    return function(){
        var view = Backbone.View.extend({
            el: $("#nav"),
            render: function () {
                this.$el.html(NavView);
            }
        });
        this.init = function(){
            var v = new view()
            v.render()
            $('.menu li').click(function () {
                $('.views').hide();
                $('.' + $(this).attr('view')).show();
                $('.menu li').removeClass('active');
                $(this).addClass('active');
            });
        };
    };

});

