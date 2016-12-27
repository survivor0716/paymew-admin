/**
 * Created by pc-8 on 16/5/16.
 */
(function () {
  'use strict';

  angular
    .module('paymewAdmin')
    .controller('AgentsController', AgentsController);

  /** @ngInject */
  function AgentsController($scope) {
    var imagePath = '';
    $scope.messages = [{
      face : imagePath,
      what : 'Brunch this weekend?',
      who  : 'Min Li Chan',
      when : '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what : 'Brunch this weekend?',
      who  : 'Min Li Chan',
      when : '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what : 'Brunch this weekend?',
      who  : 'Min Li Chan',
      when : '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what : 'Brunch this weekend?',
      who  : 'Min Li Chan',
      when : '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what : 'Brunch this weekend?',
      who  : 'Min Li Chan',
      when : '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];

    $scope.titles = {
      mchID     : '商户号',
      mchName   : '商户名称',
      createTime: '创建时间',
      belongTo  : '所属代理商',
      numOfStore: '门店数量',
      detail    : '详细信息',
      withdraw  : '提现管理',
      state     : '状态'
    };

    $scope.data = [{
      mchID     : '商户号',
      mchName   : '商户名称',
      createTime: '创建时间',
      belongTo  : '所属代理商',
      numOfStore: '门店数量',
      detail    : '详细信息',
      withdraw  : '提现管理',
      state     : '状态'
    }, {
      mchID     : '商户号',
      mchName   : '商户名称',
      createTime: '创建时间',
      belongTo  : '所属代理商',
      numOfStore: '门店数量',
      detail    : '详细信息',
      withdraw  : '提现管理',
      state     : '状态'
    }, {
      mchID     : '商户号',
      mchName   : '商户名称',
      createTime: '创建时间',
      belongTo  : '所属代理商',
      numOfStore: '门店数量',
      detail    : '详细信息',
      withdraw  : '提现管理',
      state     : '状态'
    }, {
      mchID     : '商户号',
      mchName   : '商户名称',
      createTime: '创建时间',
      belongTo  : '所属代理商',
      numOfStore: '门店数量',
      detail    : '详细信息',
      withdraw  : '提现管理',
      state     : '状态'
    }];
  }
})();
