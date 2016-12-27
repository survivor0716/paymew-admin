(function() {
  'use strict';

  angular
    .module('paymewAdmin')
    .directive('acmeSidebar', acmeSidebar);

  /** @ngInject */
  function acmeSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {

      },
      controller: SidebarController,
      controllerAs: 'vm'
      //bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController() {
      var vm = this;

    }
  }

})();
