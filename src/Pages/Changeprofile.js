import { useState } from "react"
import { useContext } from "react"
import { App12Context } from "../App"

export const Changeprofile=()=>{

    const { setUserName } = useContext(App12Context);
    const [newUserName, setNewUserName] = useState("");

    return(
        <div>
            <input onChange={(e)=>setNewUserName(e.target.value)}/>
            <button onClick={()=>setUserName(newUserName)}>Change username</button>
        </div>
    )
}