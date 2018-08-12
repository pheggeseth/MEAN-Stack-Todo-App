const consoleLogs = true;
const todoApp = angular.module('todoApp', ['ngAnimate']);

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
    
    if (!(vm.newTodo.text && vm.newTodo.category)) {
      console.log('must complete all todo fields');
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
      vm.newTodo = {};
      //vm.getTodosFromDB();
      vm.todos.push(response.data);
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos POST error:', error);
    });
  };

  vm.toggleTodoCompleted = function(id) {
    if(consoleLogs) console.log('complete todo:', id);
    $http({
      method: 'PUT',
      url: '/todos/complete/' + id
    }).then(function(response) {
      if(consoleLogs) console.log('/todos PUT success:', response);
      //vm.getTodosFromDB();
      for(let i = 0; i < vm.todos.length; i++) {
        if (vm.todos[i]._id === id) vm.todos.splice(i, 1, response.data);
      }
    }).catch(function(error) {
      if(consoleLogs) console.log('/todos PUT error:', error);
    });
  };

  vm.handleDeleteClick = function(id) {
    // swal({
    //   title: "Are you sure?",
    //   text: "Deleting a todo is permanent. No take backs!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then(deleteConfirmed => {
    //   if (deleteConfirmed) deleteTodo(id);
    // });
    deleteTodo(id);
  }

  function deleteTodo(id) {
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