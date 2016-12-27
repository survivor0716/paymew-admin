/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('AddAgentsController', AddAgentsController)
    .config(function ($mdThemingProvider) {

      // Configure a dark theme with primary foreground yellow

      $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('orange')
        .dark();

    });

  /** @ngInject */
  function AddAgentsController($log, $scope, pmapi, $mdDialog) {
    $scope.agents = {
      name: null,
      username: null
    };

    $scope.submit = function () {
      var params = {
        name: $scope.agents.name,
        username: $scope.agents.username
      };
      pmapi.agents.add(params)
        .then(function (data) {
          if(!data.errCode) {
            $log.debug(data.data);
          } else {
            $log.error(data);
          }
        }, function (errMsg) {
          $log.error(errMsg);
        });
    };

    $scope.alertType = {
      success: {
        title: '添加代理商',
        textContent: '已成功添加代理商: ' + $scope.agents.name,
        ok: '确定'
      }
    };
    $scope.showAlert = function (ev, alert) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(alert.title)
          .textContent(alert.textContent)
          .ariaLabel('Alert Dialog')
          .ok(alert.ok)
      );
    }
  }
})();
