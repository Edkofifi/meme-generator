// This is a note on the use of useState in js
//
import React from 'react'

export  function Counter(){
    const [count, setCount] = React.useState(0)

    function add(){
        setCount(count+1)
        console.log(count)
    }

    function substract(){
        setCount(count-1)
        console.log(count)
    }
// using a call back function instead so that we can have our previous state
    function add1(){
        // setCount(function (oldValue))
        setCount(prevCount => prevCount + 1)
    }

    function substract1(){
        // setCount(function (oldValue))
        setCount(prevCount => prevCount - 1)
    }
    return(
        <div>
            <button className='counter--minus' onClick={substract}>-</button>
            <div className='counter--count'>
                <h1>{count}</h1>
            </div>
            <button className='counter--plus' onClick={add}>+</button>
        </div>
    )
}


function GoOut(){
// learning to use the ternary operator
const isGoingOut = true
let answer
if (isGoingOut === true){
    answer = "Yes"
}else {
    answer = "No"
}

// use the ternary operator rather
let answer1 = isGoingOut ? "Yes": "No"

return (
    <div>
        <h1>Do I feel like going out tonight?</h1>
        <div>
            <h1>{answer1}</h1>
        </div>
    </div>
)
}


export  function GoOut1(){
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div>
            <h1>Do I feel like going out tonight?</h1>
            <div onClick={changeMind}>
                <h1>{isGoingOut ? "Yes": "No" }</h1>  /* ternary operator */
            </div>
        </div>
    )
    }


    export default function Displaythings(){
        const [thingsArray, setThingsArray] = React.useState(['thing 1', 'thing 2'])

        function addItem(){
            // thingsArray.push('thing 3') --- wrong, you cannot directly change the state. use the state function to change the use state
            setThingsArray(prevthingsArray => 
                 [...prevthingsArray, `thing ${prevthingsArray.length + 1} `])     //we get the previous state and add a new thing when the function is called
        
        }
        let thingsElement
        thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)


        return (
            <div>
                <button onClick={addItem}>Add item</button>
                <div>{thingsElement}</div>
            </div>
        )
    }