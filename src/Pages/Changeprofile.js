import { useState } from "react"

export const Changeprofile=(props)=>{

    const [newUserName, setNewUserName] = useState("");

    return(
        <div>
            <input onChange={(e)=>setNewUserName(e.target.value)}/>
            <button onClick={()=>props.setUserName(newUserName)}>Change username</button>
        </div>
    )
}