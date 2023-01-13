import React, { useLayoutEffect, useState, useRef } from "react";
import './TimeLine.scss';
import 'animate.css';
// import JsonFile from '../assets/timeline.json'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

var onceFlag = true;

function TimeLine() {
  const ref = useRef(null);
  const [dayList, SetDayList] = useState([])
  const [animationFlag, setAnimationFlag] = useState(false);
  // const [displayFlag, setDisplayflag] = useState(false)
  // const [displayId, setDisplayId] = useState(0)
  const date = new Date();
  const weekDayList = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
  const sliderComponent = document?.getElementById("slider-box");
  const calcDayList = () => {
    if(onceFlag) onceFlag = false
    else return
    const today = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
      weekDay: weekDayList[date.getDay()].toUpperCase(),
      event: []
    }
    SetDayList([today])
    const backwardDate = new Date();
    const forwardDate = new Date();
    for (let i = 0; i < 90; i++) {
      backwardDate.setDate(backwardDate.getDate()-1)
      forwardDate.setDate(forwardDate.getDate()+1)
      const backwardDay = {
        year: backwardDate.getFullYear(),
        month: backwardDate.getMonth()+1,
        day: backwardDate.getDate(),
        weekDay: weekDayList[backwardDate.getDay()].toUpperCase(),
        event: []
      }
      const forwardDay = {
        year: forwardDate.getFullYear(),
        month: forwardDate.getMonth()+1,
        day: forwardDate.getDate(),
        weekDay: weekDayList[forwardDate.getDay()].toUpperCase(),
        event: []
      }
      SetDayList(prevarray =>([backwardDay, ...prevarray, forwardDay]))
    }
  }
  const jsonFileHandling = () => {

  }
  useLayoutEffect(()=>{
    calcDayList()
    jsonFileHandling()
  })
  return (
    <div className="TimeLine">
      <div className="today-display" onClick={()=>{
        ref?.current?.scrollIntoView({behavior: 'smooth'})
        setAnimationFlag(!animationFlag);
        console.log("first")
        const timerId = setInterval(() => {
          setAnimationFlag(false);
          clearInterval(timerId)
          console.log("second")
        }, 3500);
      }}>
        {dayList[90]?.day + '/' + dayList[90]?.month + '/' + dayList[90]?.year + ' (' + dayList[90]?.weekDay + 'DAY)'}
      </div>
      <div className="timeline-box">
        <div className="button" onMouseDown={()=>{
          sliderComponent?.scrollBy({top:0,left:-300,behavior:'smooth'})
        }}>{'<-'}</div>
        <div id="slider-box" className="slider-box">
          {
            dayList?.map((item, index)=>{
              return(
                <div className={`day-item${animationFlag&&index===90?' animate':''}${item.weekDay==='SUN'?' sunday':''}${item.weekDay==='SAT'?' saturday':''}`}
                ref={index===90 ? ref : null} key={'day-item'+index}>
                  <div className="weekday">{item.weekDay}</div>
                  <div className="date">{item.day}/{item.month}</div>
                </div>
              )
            })
          }
        </div>
        <div className="button" onMouseDown={()=>sliderComponent?.scrollBy({top:0,left:300,behavior:'smooth'})}>{'->'}</div>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimeLine;
