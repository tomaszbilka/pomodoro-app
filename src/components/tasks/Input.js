import { useState } from 'react';
import styles from './Input.module.css';
import Button from '../UI/Button';

const Input = (props) => {
  const [task, setTask] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (task.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(task);
    setTask('');
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='task'>Add Task:</label>
      <input
        type='text'
        id='task'
        value={task}
        onChange={inputChangeHandler}
        className={`${!isValid && styles.invalid}`}
      ></input>
      <Button text={'add'} type={'submit'} scale={0.7} />
    </form>
  );
};

export default Input;
