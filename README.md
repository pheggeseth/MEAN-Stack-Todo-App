# MEAN Stack Todo Application

The third weekend challenge for Prime Digital Academy was to create a todo application using AngularJS and the MEAN stack. The application uses a MongoDB database to store a collection of all todos. A new todo may be added by inputting text as well as a category. The new todo is then stored on the database and appended to the list of todos stored in the AngularJS controller and rendered by AngularJS. Each todo in the list may be completed or deleted, and these state changes are automatically reflected in the database.

Optional stretch goals that were implemented as part of this project were the ability to filter the displayed list of todos by the todo category, a todo delete confirmation modal using Sweetalert, simple input validation upon submit, and the use of Bootstrap CSS. I also implemented a custom-made checkbox as well as limited CSS animations via ngAnimate.

## Built With

MongoDB, AngularJS, Express, Node.js, Sweetalert

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
3. `npm start`

## Checklist

This was how I scoped out the assignment into major tasks and subtasks.

- [x] Determine the Schema of the todo for MongoDB
- [x] Configure todos.router.js with the appropriate schema and model for todos
- [x] Setup AngularJS app
- [x] It should be able to display all todos
  - [x] make function to get all todos
    - [x] make HTTP GET request for all todos
    - [x] write todos GET route in todos.router.js
      - [x] successfully get all todos from database
    - [x] store todos from database in controller array
  - [x] show all todos with ng-repeat on the DOM (unordered list)
- [x] It should be able to add a new todo
  - [x] create HTML form
    - [x] Input field for todo text
    - [x] Submit button
    - [x] submit event should trigger submit handler function
  - [x] submit handler function should trigger HTTP POST request
    - [x] write todos POST route in todos.router.js
      - [x] successfully get data from POST request
      - [x] save POST data to database
  - [x] get all todos after successfully adding new todo
- [x] It should be able to 'Complete' and 'Delete' each todo
  - [x] add Complete and Delete buttons to each list item
  - [x] Implement Complete
    - [x] clicking the Complete button should call completeTodo function, passing in the todo ID
    - [x] completeTodo function should start HTTP PUT request
      - [x] completeTodo PUT request should pass the ID to the server as data
    - [x] server should have a route for /todos PUT request
      - [x] get the right todo from the database by id
      - [x] change the todo.completed to true
      - [x] save the todo back in the database
    - [x] upon todo PUT success, get all todos
    - [x] completed todos should add "completed" class (ng-class)
  - [x] Implement Delete (largely the same process and implementing the complete feature)

### Stretch Goals

- [x] add Bootstrap to the page
- [x] create a confirmation prompt upon todo delete
- [x] move inputs into form with ng-submit
- [x] add input validation to form
- [x] add category field to form
  - [x] allow user to filter by category
- [x] have completed tasks be brought to bottom of page
      
