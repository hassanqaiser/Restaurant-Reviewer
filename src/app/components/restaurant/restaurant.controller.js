(function() {
  'use strict';

  angular
    .module('restaurantReviewerQ')
    .controller('RestaurantController', RestaurantController);

  /** @ngInject */
  function RestaurantController(restaurantData, $stateParams) {
    var vm = this;
    var reviewsFileLocation =  $stateParams.restaurant.replace(/ /g, "_");

    restaurantData
      .getData('assets/data/reviews_' + reviewsFileLocation + '.json')
      .then(function(response) {
        vm.reviews = response.data;
      }, function(error){
        vm.reviews = [];
      });
  }
})();
