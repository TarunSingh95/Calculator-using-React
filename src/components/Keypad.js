import React from 'react'

const Keypad = (props) =>{
    
    return(
    <div className='flex-items'>
        <div className="row-1">
            <button name="(" onClick={(event) => { props.buttonClick(event.target.name) }}> ( </button>
            <button name="CE" onClick={(event) => { props.buttonClick(event.target.name) }}> CE </button>
            <button name=")" onClick={(event) => { props.buttonClick(event.target.name) }}> ) </button>
            <button name="C" onClick={(event) => { props.buttonClick(event.target.name) }}> C </button>
        </div>
        <div className="row-2">   
            <button name="1" onClick={(event) => { props.buttonClick(event.target.name) }}> 1 </button>
            <button name="2" onClick={(event) => { props.buttonClick(event.target.name) }}> 2 </button>
            <button name="3" onClick={(event) => { props.buttonClick(event.target.name) }}> 3 </button>
            <button name="+" onClick={(event) => { props.buttonClick(event.target.name) }}> + </button>
        </div>

        <div className="row-3">
            <button name="4" onClick={(event) => { props.buttonClick(event.target.name) }}> 4 </button>
            <button name="5" onClick={(event) => { props.buttonClick(event.target.name) }}> 5 </button>
            <button name="6" onClick={(event) => { props.buttonClick(event.target.name) }}> 6 </button>
            <button name="-" onClick={(event) => { props.buttonClick(event.target.name) }}> - </button>
        </div>

        <div className="row-4">
            <button name="7" onClick={(event) => { props.buttonClick(event.target.name) }}> 7 </button>
            <button name="8" onClick={(event) => { props.buttonClick(event.target.name) }}> 8 </button>
            <button name="9" onClick={(event) => { props.buttonClick(event.target.name) }}> 9 </button>
            <button name="*" onClick={(event) => { props.buttonClick(event.target.name) }}> x </button>
        </div>

        <div className="row-5">
            <button name="." onClick={(event) => { props.buttonClick(event.target.name) }}> . </button>
            <button name="0" onClick={(event) => { props.buttonClick(event.target.name) }}> 0 </button>
            <button name="=" onClick={(event) => { props.buttonClick(event.target.name) }}> = </button>
            <button name="/" onClick={(event) => { props.buttonClick(event.target.name) }}> / </button>
        </div>
    </div>
    )
}
export default Keypad