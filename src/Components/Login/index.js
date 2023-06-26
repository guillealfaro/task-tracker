import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { BsCalendar3 } from 'react-icons/bs';
import user from "../../Assets/user1.jpg"
import "./Login.scss"
import Button from '../Button';

const Main = () => {
    const [timer, setTimer] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(moment().format('MMMM Do YYYY, h:mm:ss a'),1000)
            return ()=>{
                clearInterval(interval)
            }
        })
    },[])

  return (
    <div className='main'>
      <div className="main-login">
        <span className='timer'>
            <BsCalendar3 className='calendar'/>
            {timer}
        </span>
        <div className='profile'>
           <img src={user} alt="" className='profile-pic'/>
        </div>
        <div className="credentials">
            <input type="text" placeholder='UserName'/>
            <input type="text" name="" id="" placeholder='Password' />
        </div>
        <div className="login">
            <Button />
        </div>
      </div>
    </div>
  )
}

export default Main
