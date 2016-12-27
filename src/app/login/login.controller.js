/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('LoginController', LoginController);


  /** @ngInject */
  function LoginController($log, $scope, $location, pmapi, md5) {
    var vm = this;
    vm.username = '';
    vm.password = '';

    var encryptPassword = function (password) {
      return md5.createHash('paymew' + password + password.substr(0, 1)).substr(8, 16);
    };

    vm.submit = function () {
      pmapi.login(vm.username, encryptPassword(vm.password))
        .then(function (data) {
          if(!data.errCode) {
            $log.debug(data.data);
            $location.path('/add-agents');
          } else {
            $log.error(data);
          }
        }, function (errMsg) {
          $log.error(errMsg);
        });
    };
  }
})();
