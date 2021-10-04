import React, { useState } from 'react';
import Control from './components/controls/Control';
import Input from './components/tasks/Input';
import Card from './components/UI/Card';
import TaskList from './components/tasks/TaskList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (todo) => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          content: todo,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const removeTodoItem = (Id) => {
    setTodoList((prev) => prev.filter((el) => el.id !== Id));
  };

  return (
    <Card>
      <Control />
      <Input onAddTask={addNewTodo} />
      {todoList.length > 0 ? (
        <TaskList taskList={todoList} onDeleteTodo={removeTodoItem} />
      ) : null}
    </Card>
  );
}

export default App;
