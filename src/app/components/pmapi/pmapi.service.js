/**
 * Created by pc-8 on 16/5/12.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .service('pmapi', pmapi);

  /** @ngInject */
  function pmapi($log, $http, $q) {
    //var isDebug = typeof _isDebug != 'undefined' ? _isDebug : true;
    var devApiHost = 'http://service.dev.paymew.com';
    var isDebug = false;
    var host = isDebug ? devApiHost : '';
    var api = {
      login      : host + '/login',
      agents: {
        add: host + '/distributor/add',
        list: host + '/distributor/list'
      },
      merchant: {
        add: host + '/merchant/add',
        list: host + '/merchant/list'
      },
      store: {
        add: host + '/store/add',
        list: host + '/store/list'
      },
      user: {
        add: host + '/user/add'
      },
      addMerchant: host + '/merchant/add',
      addStore   : host + '/store/add'
    };

    //
    this.login = login;
    this.agents  = {
      add : addAgents,
      list: agentsList
    };
    this.merchant = {
      add: addMerchant,
      list: merchantList
    };
    this.store = {
      add: addStore,
      list: storeList
    };
    this.user = {
      add: addUser
    };

    //
    function login(username, password) {
      var params = {
        username: username,
        password: password
      };
      $log.debug(params);

      return $http.post(api.login, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function addAgents(params) {
      $log.debug(params);

      return $http.post(api.agents.add, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function agentsList(params) {
      $log.debug(params);

      return $http.post(api.agents.list, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function addMerchant(params) {
      $log.debug(params);

      return $http.post(api.merchant.add, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function merchantList(params) {
      $log.debug(params);

      return $http.post(api.merchant.list, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function addStore(params) {
      $log.debug(params);

      return $http.post(api.addStore, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function storeList(params) {
      $log.debug(params);

      return $http.post(api.store.list, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    function addUser(params) {
      $log.debug(params);

      return $http.post(api.user.add, params)
        .then(XHRComplete)
        .catch(XHRFailed);
    }

    //
    function XHRComplete(response) {
      $log.debug(response);
      if (typeof response.data == 'object')
        return response.data;
      $q.reject(angular.toJson(response.data));
    }

    function XHRFailed(error) {
      //$log.error('XHR Failed.\n' + angular.toJson(error.data, true));
      $log.error('XHR Failed.\n', error.data);
      return $q.reject(angular.toJson(error.data, true));
    }
  }

})();
