const todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function($http) {
  vm = this;

  vm.todos = [];

  vm.getTodosFromDB = function() {
    $http({
      method: 'GET',
      url: '/todos'
    }).then(function(response) {
      console.log('/todos GET success:', response.data);
      vm.todos = response.data;
      console.log(vm.todos);
    }).catch(function(error) {
      console.log('/todos GET error:', error);
    });
  };
  
  vm.getTodosFromDB();
});