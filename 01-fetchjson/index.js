"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    // 자동으로 안에 어떤 것이 있는지 알려줌
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
// 변수가 제대로 들어왔는지 확인하기 위해서는 타입을 지정해줘야 함
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is if completed? " + completed + "\n  ");
};
