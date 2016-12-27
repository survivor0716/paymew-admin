/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('AddMerchantController', AddMerchantController);

  /** @ngInject */
  function AddMerchantController($log, $scope, pmapi, $document) {
    var vm = this;
    $scope.merchant = {
      distributor_id: null,
      name          : null,
      province      : null,
      city          : null,
      district      : null,
      detail        : null,
      contact_name   : null,
      contact_phone  : null
    };

    $scope.distributor = {
      name          : null,
      distributor_id: null
    };
    $scope.distributors = null;

    $scope.loadDistributors = function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        pmapi.agents.list({name: $scope.searchTerm})
          .then(function (data) {
            $log.debug(data);
            if (!data.errCode)
              $scope.distributors = data.data.list;
          });
      }
    };

    $scope.submit = function () {
      $scope.merchant.distributor_id = $scope.distributor.distributor_id;
      pmapi.merchant.add($scope.merchant)
        .then(function (data) {
          if (!data.errCode) {
            $log.debug(data.data);
          } else {
            $log.error(data);
          }
        }, function (errMsg) {
          $log.error(errMsg);
        });
    };

    //$scope.$watch('searchTerm', function (value) {
    //  if (value)
    //    vm.loadDistributors(value);
    //  else
    //    vm.distributors = null;
    //});

    $document.find('input').on('keydown', function (ev) {
      ev.stopPropagation();
    });
  }
})();
