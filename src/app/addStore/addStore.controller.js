/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('AddStoreController', AddStoreController);

  /** @ngInject */
  function AddStoreController($log, $scope, $document, pmapi) {
    $scope.store = {
      mch_id          : null,
      storeName       : null,
      province        : null,
      city            : null,
      district        : null,
      detail          : null,
      withdrawal_limit: null,
      withdrawal_type : null,
      accountInfo     : null
    };

    $scope.account = {
      account: null,
      name   : null,
      bank   : null,
      type   : null,
      phone  : null
    };

    $scope.merchant = {
      name  : null,
      mch_id: null
    };
    $scope.merchants = null;

    $scope.loadMerchants = function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        pmapi.merchant.list({name: $scope.searchTerm})
          .then(function (data) {
            $log.debug(data);
            if (!data.errCode)
              $scope.merchants = data.data.list;
          });
      }
    };

    $scope.submit = function () {
      $scope.store.accountInfo = angular.toJson($scope.account);
      $scope.store.mch_id = $scope.merchant.mch_id;
      pmapi.store.add($scope.store)
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

    $scope.$watch('searchTerm', function (value) {
      if (value)
        $scope.loadMerchants(value);
      else
        $scope.merchants = null;
    });

    $document.find('input').on('keydown', function (ev) {
      ev.stopPropagation();
    });
  }
})();
