import React from "react"

export default function App(){
    const [isGoingOut,setisGoingOut] = React.useState(true)
    function changeMind(){
        setisGoingOut(prevState => !prevState)
    }
    return(
        <div className="state">
            <h1>Do I feel like going out?</h1>
            <div onClick={changeMind} className="circle">
                <h1>{isGoingOut?"Yes":"No"}</h1>
            </div>
        </div>
    )
}

