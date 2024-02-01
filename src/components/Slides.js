import React from 'react'

function Slides(props) {
    console.log("index as prop:", props.index)
    console.log("slideArr as prop:", props.slideArr)
    console.log("Obj in slideArr as prop:", props.slideArr[props.index])
  return (
    <div className='slide'>
        <h2>{props.slideArr[props.index].title}</h2>
        <p>{props.slideArr[props.index].desc}</p>
        {/*{props.slideArr[props.index]}*/}
    </div>
  )
}

export default Slides