import React, { useState, useEffect } from "react";
import styled from "styled-components";

export interface ITimerProps {
  isTimerImage: boolean;
  timerIconOrUrl?: string;
  timeLeft: number;
  timeLabel?: {
    hrs?: string;
    mins?: string;
    secs?: string;
  };
  iconColor?: string;
  timerColor?: string;
  fontWeight?: number;
  fontSize?: string;
  timerWrapperClassName?: string;
  onTimeOut?: () => any;
  onTick?: (time?: any) => any;
}

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerImg = styled.img`
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
`;

const TimerClass = styled.span`
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  color: ${(props) => props.color || "#d84e55"};
  font-weight: 700;
  font-size: 19px;
`;

const TimeWrap = styled.div<{ fontWeight?: number, fontSize?: string }>`
  display: inline-block;
  color: ${(props) => props.color || "#d84e55"};
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) => props.fontSize || "14px"};
`;

const TimeUnit = styled.span``;

const TimeNum = styled.span`
  transition: transform 3s;
`;

const NumCycle = styled.div`
  display: inline-block;
`;

const TimeLabel = styled.span``;

export const Timer = (props: ITimerProps) => {
  const [currentCount, setCount] = useState(props.timeLeft || 10);
  useEffect(
    () => {
      if (currentCount <= 0) {
        if (props.onTimeOut) {
          props.onTimeOut();
        }
        return;
      }
      const id = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 0) {
            if (props.onTimeOut) {
              props.onTimeOut();
            }
            clearInterval(id);
            return 0;
          } else {
            if (props.onTick) {
              props.onTick(prevCount - 1);
            }
            return prevCount - 1;
          }
        });
      }, 1000);
    },
    [],
  );
  const hr = Math.floor(currentCount / 3600);
  const x = currentCount % 3600;
  const min = Math.floor(x / 60);
  const secs = currentCount % 60;
  return (
    <TimerWrapper className={props.timerWrapperClassName}>
      {props.isTimerImage ?
        <TimerImg src={props.timerIconOrUrl} /> :
        <TimerClass color={props.iconColor} className={props.timerIconOrUrl} />
      }
      <TimeWrap color={props.timerColor} fontWeight={props.fontWeight} fontSize={props.fontSize}>
        {hr > 0 && <TimeUnit>
          <NumCycle>
            <TimeNum>{(hr <= 9 ? "0" : "") + hr}</TimeNum>
          </NumCycle>
          {props.timeLabel?.hrs && <TimeLabel>{props.timeLabel.hrs}</TimeLabel>}{" : "}
        </TimeUnit>}
        {(min >= 0 || hr > 0) && <TimeUnit>
          <NumCycle>
            <TimeNum>{(min <= 9 ? "0" : "") + min}</TimeNum>
          </NumCycle>
          {props.timeLabel?.mins && <TimeLabel>{props.timeLabel.mins}</TimeLabel>}{" : "}
        </TimeUnit>}
        {(secs >= 0 || min >= 0 || hr > 0) && <TimeUnit>
          <NumCycle>
            <TimeNum>{(secs <= 9 ? "0" : "") + secs}</TimeNum>
          </NumCycle>
          {props.timeLabel?.secs && <TimeLabel>{props.timeLabel.secs}</TimeLabel>}
        </TimeUnit>}
      </TimeWrap>
    </TimerWrapper>
  );
};

Timer.defaultProps = {
  isTimerImage: true,
  timerIconOrUrl: "",
  timeLeft: 0,
  timeLabel: {
    hrs: "",
    mins: "",
    secs: "",
  },
};

export default Timer;