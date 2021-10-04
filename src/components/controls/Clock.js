import styles from './Clock.module.css';

const Clock = (props) => {
  const showMinute = Math.floor(props.seconds / 60);
  const showSeconds = props.seconds - showMinute * 60;

  const formatedSeconds =
    showSeconds.toString().length === 1 ? `0${showSeconds}` : showSeconds;


  return (
    <div className={styles.clock} onClick={props.onClick}>
      {`${showMinute}:${formatedSeconds}`}
    </div>
  );
};

export default Clock;
