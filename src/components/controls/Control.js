import React, { useState, useSound } from 'react';
import styles from './Control.module.css';
import Button from '../UI/Button';
import Clock from './Clock';
import RoundButton from '../UI/RoundButton';
import SetClock from './SetClock';
import Info from './Info';

const resetIcon = <i class='fas fa-grip-lines-vertical'></i>;
const infoIcon = <i class='fas fa-question'></i>;
let timer;
const startedValueOfSecond = 1500;
let bellSound = new Audio('./assets/bell.mp3');

const Control = (props) => {
  const [seconds, setSeconds] = useState(startedValueOfSecond);
  const [isActive, setIsActive] = useState(false);
  const [isOpenSetTimer, setIsOpenSetTimer] = useState(false);
  const [timerTitle, setTimerTitle] = useState('Pomodoro');
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const playSound = () => {
    bellSound.play();
  };

  const setCustomTimePanelOpen = () => {
    setIsOpenSetTimer(true);
    stopTimer();
  };

  const setCustomTime = (time) => {
    setSeconds(time * 60);
    setIsOpenSetTimer(false);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setIsActive(false);
    setSeconds(startedValueOfSecond);
    setTimerTitle('Pomodoro');
  };

  const closeCustomPanelHandler = () => {
    setIsOpenSetTimer(false);
  };

  const startHandler = () => {
    setIsActive(true);
    if (seconds >= 1500) setTimerTitle('FOCUS!');
    if (seconds < 1500) setTimerTitle('REST TIME!');
    timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          stopTimer();
          playSound();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseHandler = () => {
    setIsActive(false);
    clearInterval(timer);
  };

  const resetHandler = () => {
    setIsActive(false);
    clearInterval(timer);
    setSeconds(startedValueOfSecond);
    setTimerTitle('Pomodoro');
  };

  const showInfoHandler = () => {
    setIsInfoOpen(true);
  };

  const closeInfoPanelHandler = () => {
    setIsInfoOpen(false);
  };

  return (
    <React.Fragment>
      {isOpenSetTimer && (
        <SetClock onClick={closeCustomPanelHandler} onSetTime={setCustomTime} />
      )}
      {isInfoOpen && <Info closeInfoPanel={closeInfoPanelHandler} />}
      <div className={styles.container}>
        <p className={styles.title}>{timerTitle}</p>
        <RoundButton
          text={resetIcon}
          type={'button'}
          onClick={resetHandler}
          rotate={'45deg'}
        />
        <RoundButton
          text={infoIcon}
          type={'button'}
          onClick={showInfoHandler}
          left={'95%'}
        />
      </div>
      <div className={styles.container}>
        <Button text={'START'} type={'button'} onClick={startHandler} />
        <Clock seconds={seconds} onClick={setCustomTimePanelOpen} />
        <Button
          text={'PAUSE'}
          type={'button'}
          onClick={pauseHandler}
          disabled={!isActive}
        />
      </div>
    </React.Fragment>
  );
};

export default Control;
