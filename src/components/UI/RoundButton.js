import styles from './RoundButton.module.css';

const RoundButton = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      style={{
        transform: `scale(${props.scale})`,
        transform: `rotate(${props.rotate})`,
        top: `${props.top}`,
        left: `${props.left}`,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default RoundButton;
