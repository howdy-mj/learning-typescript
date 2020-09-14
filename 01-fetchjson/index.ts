import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// 타입 정의
// 모든 Todo는 아래 세 개의 프로퍼티를 가질 것
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  // 자동으로 안에 어떤 것이 있는지 알려줌
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// 변수가 제대로 들어왔는지 확인하기 위해서는 타입을 지정해줘야 함
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is if completed? ${completed}
  `);
};
