define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'controllers/page/NavController',
  'controllers/page/HomeController',
  'controllers/page/FooterController'
], function ($, _, Backbone, Config, NavController, HomeController, FooterController) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {

        var app_router = new AppRouter;

        app_router.on('route:defaultAction', function () {

            var navController = new NavController();
            navController.init();

            var homeView = new HomeController();
            homeView.render();

            var footerView = new FooterController();

        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
