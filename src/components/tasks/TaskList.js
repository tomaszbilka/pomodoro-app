import Card from '../UI/Card';
import ToDoItem from './ToDoItem';
import styles from './TaskList.module.css';

const TaskList = (props) => {
  const tasksToDo = props.taskList.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        content={todo.content}
        onDeleteTodo={props.onDeleteTodo}
      />
    );
  });

  return (
    <section>
      <Card>
        <ul className={styles.list}>{tasksToDo}</ul>
      </Card>
    </section>
  );
};

export default TaskList;
