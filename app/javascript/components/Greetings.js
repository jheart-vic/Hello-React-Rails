import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGreetings } from '../Store/greetingsSlice'

const Greeting = () => {
const dispatch = useDispatch();

 const randomGreetings = () => {
  dispatch(fetchGreetings())
 }
  
 useEffect(() => {
  randomGreetings();
 },[])

 
  const { greetings }= useSelector((state) => state.greetings)
  return (
    <div>
        <p>{ greetings }</p>
      <button onClick={() => randomGreetings()}>Generate new message</button>
    </div>
  )
}

export default Greeting
