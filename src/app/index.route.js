(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl : 'app/main/main.html',
        controller  : 'MainController',
        controllerAs: 'main'
      })
      .when('/admin', {
        templateUrl : 'app/admin/admin.html',
        controller  : 'AdminController',
        controllerAs: 'admin'
      })
      .when('/login', {
        templateUrl : 'app/login/login.html',
        controller  : 'LoginController',
        controllerAs: 'login'
      })
      .when('/agents', {
        templateUrl : 'app/agents/agents.html',
        controller  : 'AgentsController',
        controllerAs: 'agents'
      })
      .when('/add-agents', {
        templateUrl : 'app/addAgents/addAgents.html',
        controller  : 'AddAgentsController',
        controllerAs: 'addAgents'
      })
      .when('/add-merchant', {
        templateUrl : 'app/addMerchant/addMerchant.html',
        controller  : 'AddMerchantController',
        controllerAs: 'addMerchant'
      })
      .when('/add-store', {
        templateUrl : 'app/addStore/addStore.html',
        controller  : 'AddStoreController',
        controllerAs: 'addStore'
      })
      .when('/add-user', {
        templateUrl : 'app/addUser/addUser.html',
        controller  : 'AddUserController',
        controllerAs: 'addUser'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

})();
