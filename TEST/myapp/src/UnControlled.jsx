import React from 'react'
import {data,data2} from './App'
import { useContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Controlled from './Controlled'

function UnControlled() {
  const fname= useContext(data)
  const gender= useContext(data2)
  console.log(`my name is ${fname} and i am ${gender}`);

  const input = useRef(null)

  const submit = (e) =>{
    e.preventDefault()
    console.log(input.current.value)
  }
  return (
    <div>

      {/* <form>
        <input ref = {input} text='text' placeholder='UnControlled'/>
        
        <button onClick={(e)=>{submit(e)}}>submit</button>
        
      </form>
       */}
    </div>
  )
}

export default UnControlled
