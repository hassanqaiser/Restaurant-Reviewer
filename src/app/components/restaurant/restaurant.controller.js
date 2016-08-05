(function() {
  'use strict';

  angular
    .module('restaurantReviewerQ')
    .controller('RestaurantController', RestaurantController);

  /** @ngInject */
  function RestaurantController(restaurantData, $stateParams, $state) {
    var vm = this;
    vm.reviews = [];
    vm.rating = 0;
    vm.restaurantName = $stateParams.restaurant;
    $("#title").focus();
    var reviewsFileLocation =  vm.restaurantName.replace(/ /g, "_");

    restaurantData
      .getData('assets/data/reviews_' + reviewsFileLocation + '.json', vm.restaurantName)
      .then(function(response) {
        vm.reviews = response.data;
      }, function(error){
        vm.reviews = [];
      });

    vm.addReview = function(){
      var now = new Date();
      var newReview = {
        reviewer: vm.reviewerName,
        comments: vm.reviewerComment,
        stars: vm.rating,
        date: now.toString().substring(0, 21)
      };

      vm.reviews.push(newReview);
      $("#homeBtn").focus();
    }

    vm.goHome = function(){
      $state.go('restaurantsList');
    }

  }
})();
