const consoleLogs = false;
const todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function($http) {
  vm = this;

  vm.todos = [];
  vm.newTodo = {};

  vm.getTodosFromDB = function() {
    $http({
      method: 'GET',
      url: '/todos'
    }).then(function(response) {
      if(consoleLogs) console.log('/todos GET success:', response.data);
      vm.todos = response.data;
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos GET error:', error);
    });
  };

  vm.addNewTodo = function() {
    if(consoleLogs) console.log('in addNewTodo');
    if (!vm.newTodo.text) {
      if(consoleLogs) console.log('new todo must have text');
      return;
    }
    vm.newTodo.completed = false;
    if(consoleLogs) console.log('/todos POST request');
    $http({
      method: 'POST',
      url: '/todos',
      data: vm.newTodo
    }).then(function(response) {
      if(consoleLogs) console.log('/todos POST success:', response);
      vm.newTodo.text = '';
      vm.getTodosFromDB();
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos POST error:', error);
    });
  };

  vm.completeTodo = function(id) {
    if(consoleLogs) console.log('complete todo:', id);
    $http({
      method: 'PUT',
      url: '/todos/complete/' + id
    }).then(function(response) {
      if(consoleLogs) console.log('/todos PUT success:', response);
      vm.getTodosFromDB();
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos PUT error:', error);
    });
  };

  vm.deleteTodo = function(id) {
    if(consoleLogs) console.log('delete todo:', id);
    $http({
      method: 'DELETE',
      url: '/todos/delete/' + id
    }).then(function(response) {
      if(consoleLogs) console.log('/todos DELETE success:', response);
      vm.getTodosFromDB();
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos DELETE error:', response);
    });
  };
  
  vm.getTodosFromDB();
});