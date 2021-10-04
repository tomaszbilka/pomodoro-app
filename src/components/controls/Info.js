import { Fragment } from 'react';
import styles from './Info.module.css';
import Backdrop from '../UI/Backdrop';
import infoImg from '../../imgs/info.jpg';

const Info = (props) => {
  return (
    <Fragment>
      <Backdrop onClick={props.closeInfoPanel} />
      <section className={styles.container} onClick={props.closeInfoPanel}>
        <div>
          <img src={infoImg} alt='how to use this application' />
        </div>
        <div className={styles.text}>
          <h5>
            how to use <br />
            <span className={styles.bold}>Pomodoro Appplication</span>
          </h5>
          <p>
            Add your tasks into the task-list. Set time counter ( time less
            then: 25[min] - break time, time greater then: 25[min] - work time).
            Start your work cycle, when time will be up, you will hear the bell
            sound and you should make short brake ( 5[min] ). Repeat that cycle
            three or four times and make longer break (20[min]). When you finish
            a task, remove it from the list by clicking on 'done' button. For
            more information about Pomodoro Method, just click:
            <a
              href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
              target='_blank'
            >
              here
            </a>
            . You can reset time whenever you want by click reset button. When
            title show: 'Focus' is a work time, when 'Break' - is a rest time.
            Tap anywhere to close this window. Enjoy!
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Info;
