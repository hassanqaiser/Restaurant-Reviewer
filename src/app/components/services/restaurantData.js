(function() {
  'use strict';

/**
 * @ngdoc service
 * @name publicTransAppApp.idb
 * @description
 * # idb
 * Factory in the publicTransAppApp.
 */
angular.module('restaurantReviewerQ')
  .service('restaurantData', function ($http) {


    return {

      getData: function (url){
        return $http.get(url);
      }

    };
  });
})();
