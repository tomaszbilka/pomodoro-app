import { Fragment, useRef } from 'react';
import styles from './SetClock.module.css';
import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';


const SetClock = (props) => {

  const timeInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    props.onSetTime(timeInputRef.current.value);
    timeInputRef.current.value = '';
  }


  return (
    <Fragment>
      <Backdrop onClick={props.onClick} />
      <form className={styles.set_time_form} onSubmit={submitHandler}>
        <h3>Set custom time</h3>
        <div className={styles.wrap}>
          <label>Minutes:</label>
          <input type='number' min='0' max='60' step='1' ref={timeInputRef}></input>
          <Button type={'submit'} text={'set'} scale={'0.9'} />
        </div>
      </form>
    </Fragment>
  );
};

export default SetClock;
