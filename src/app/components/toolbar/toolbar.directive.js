(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .directive('acmeToolbar', acmeToolbar);

  /** @ngInject */
  function acmeToolbar() {
    var directive = {
      restrict    : 'E',
      templateUrl : 'app/components/toolbar/toolbar.html',
      scope       : {},
      controller  : ToolbarController,
      controllerAs: 'vm'
      //bindToController: true
    };

    return directive;

    /** @ngInject */
    function ToolbarController($log, $scope, $mdSidenav) {
      var vm = this;
      $scope.toggleLeft = buildToggler('left');

      function buildToggler(navID) {
        return function () {
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug('toggle ' + navID + ' is done');
            });
        }
      }
    }
  }

})();
