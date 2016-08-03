(function() {
  'use strict';

  angular
    .module('restaurantReviewerQ')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, restaurantData) {
    var vm = this;
    vm.typeSearch = 'All types';
    vm.priceSearch = 'All prices';
    vm.ratingSearch = 'All ratings';
    vm.locationSearch = 'All locations';
    var tmpPricesObjArray = [];
    restaurantData.getData('assets/data/restaurants.json').then(function(response) {
        vm.restaurants = response.data;

        vm.locations=[], vm.types = [], vm.prices = [], vm.ratings = [];
        response.data.forEach(function(restaurant){
          if (vm.locations.indexOf(restaurant.address) === -1 )
            vm.locations.push(restaurant.address);
          if (vm.types.indexOf(restaurant.type[0]) === -1 )
            vm.types.push(restaurant.type[0]);
          if (vm.ratings.indexOf(restaurant.rating) === -1 )
            vm.ratings.push(restaurant.rating);

          var pricObj = {};
          if(restaurant.price === "$"){
            pricObj.value = '$';
            pricObj.label = 'Average';
          } else if(restaurant.price === "$$"){
            pricObj.value = '$$';
            pricObj.label = 'Expensive';
          } else if(restaurant.price === "$"){
            pricObj.value = '$$$';
            pricObj.label = 'Very Expensive';
          }
          tmpPricesObjArray.push(pricObj);
          });

          var flags = {};
          vm.prices = tmpPricesObjArray.filter(function(entry) {
              if (flags[entry.value]) {
                  return false;
              }
              flags[entry.value] = true;
              return true;
          });

    });

    vm.filterRestaurants = function(element) {

      if (vm.locationSearch !== 'All locations')
      {
          if (!element.address.includes(vm.locationSearch))
              return false;
      }
      if (vm.typeSearch !== 'All types')
      {
          if (!element.type.includes(vm.typeSearch))
              return false;
      }
      if (vm.priceSearch != 'All prices')
      {
          if (element.price != vm.priceSearch)
              return false;
      }
      if (vm.ratingSearch != 'All ratings')
      {
          if (element.rating != vm.ratingSearch)
              return false;
      }
      return true;

    };
  }
})();
