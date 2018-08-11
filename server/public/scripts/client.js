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

  vm.addNewTodo = function() {
    console.log('in addNewTodo');
    
    if (!vm.newTodo.text) {
      console.log('new todo must have text');
      return;
    }

    console.log('/todos POST request');
    $http({
      method: 'POST',
      url: '/todos',
      data: vm.newTodo
    }).then(function(response) {
      console.log('/todos POST success:', response);
    }).catch(function(error) {
      console.log('/todos POST error:', error);
    });
  };
  
  vm.getTodosFromDB();
});