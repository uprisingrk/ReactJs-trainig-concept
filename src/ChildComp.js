import React from 'react'

export default function ChildComp(props) {
  return (
    <>
     <button onClick={() => props.getinfo('101','Scorpio')} >Click Me </button>
    </>
  )
}
