import styles from './ToDoItem.module.css';
import Button from '../UI/Button';

const ToDoItem = (props) => {
  const deleteItemHandler = (event) => {
    props.onDeleteTodo(event.target.dataset.id);
  };

  return (
    <div className={styles.container}>
      <li>{props.content}</li>
      <Button
        type={'button'}
        text={'done'}
        scale={0.5}
        onClick={deleteItemHandler}
        dataId={props.id}
      />
    </div>
  );
};

export default ToDoItem;
