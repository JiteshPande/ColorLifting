import React,{useState} from 'react'

function Color({getColor}) {
const[color, setColor] =useState(''); 

  function ColorFunc(value) {
    getColor(value)
    
  }
  return (
    <div>
      
      <input type ='text' placeholder ='enter the color ' onChange ={(e)=>{ColorFunc(e.target.value)}}/>
    </div>
  )
}

export default Color
