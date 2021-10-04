import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      style={{ transform: `scale(${props.scale})` }}
      onClick={props.onClick}
      disabled={props.disabled}
      data-id={props.dataId}
    >
      {props.text}
    </button>
  );
};

export default Button;
