import React, { useState } from 'react'

function Speedcalc() {

const [value1,setValue1]=useState('')
const [value2,setValue2]=useState('')
console.log(value1,value2);

const speed=(a,b)=>
{
    
    let e = a/b 
    return e
}






  return (
    <div>
      <h1>Speed Calculator</h1>
      <input  onChange={e=>setValue1(e.target.value)} type="text" placeholder='enter value' /> <br /><br />
      <input onChange={e=>setValue2(e.target.value)} type="text" placeholder='enter value' /> <br /><br />
      <button onClick={speed}>Speed</button> 
      {/* <button>Distance</button>
      <button>Time</button> */}
      
    </div>
  )
}

export default Speedcalc
