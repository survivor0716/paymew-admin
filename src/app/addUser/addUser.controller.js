/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('AddUserController', AddUserController);

  /** @ngInject */
  function AddUserController($log, $scope, $document, pmapi) {
    $scope.user = {
      phone  : null,
      role   : null,
      storeId: null
    };

    $scope.store = {
      storeName: null,
      store_id : null
    };
    $scope.stores = null;

    $scope.loadStores = function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        pmapi.store.list({name: $scope.searchTerm})
          .then(function (data) {
            $log.debug(data);
            if (!data.errCode)
              $scope.stores = data.data.list;
          });
      }
    };

    $scope.submit = function () {
      $scope.user.storeId = $scope.store.store_id;
      $scope.user.role = $scope.selected;
      pmapi.user.add($scope.user)
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
        $scope.loadStores(value);
      else
        $scope.stores = null;
    });

    $document.find('input').on('keydown', function (ev) {
      ev.stopPropagation();
    });

    $scope.roles = [1, 2, 3];
    //  {
    //    name: '店长',
    //    value: 1
    //  },
    //  {
    //    name: '收银员',
    //    value: 2
    //  },
    //  {
    //    name: '商户管理员',
    //    value: 3
    //  }
    //];
    $scope.selected = [];

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };
  }
})();
