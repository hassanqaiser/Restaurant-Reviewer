(function() {
  'use strict';

  angular
    .module('restaurantReviewerQ')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
