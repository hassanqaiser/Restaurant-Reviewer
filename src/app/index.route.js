(function() {
  'use strict';

  angular
    .module('restaurantReviewerQ')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('restaurantsList', {
        url: '/restaurantsList',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('restaurantsDetails', {
        url: '/restaurantsList/:restaurant',
        templateUrl: 'app/components/restaurant/restaurant.html',
        controller: 'RestaurantController',
        controllerAs: 'RestaurantCtrl'
      });

    $urlRouterProvider.otherwise('/restaurantsList');
  }

})();
