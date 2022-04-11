import React, { useRef } from 'react'

export default function Uncontrolled() {
    let inputref = useRef(null)
  function uncontrolledHandler(e) {
    e.preventDefault()
    console.warn(inputref.current.value)
  }
    return (
        <>
            
            <h1>Uncontrolled component</h1>
            <form onSubmit={uncontrolledHandler}>
                <input ref={inputref} type="text" />
                
                <button>Click</button>
                {/* <h4>{inputref.current.value}</h4> */}
            </form>



        </>
    )

}


