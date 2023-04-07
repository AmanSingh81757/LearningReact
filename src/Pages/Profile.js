import { Changeprofile } from "./Changeprofile"
import { useContext } from "react"
import { App12Context } from "../App"

export const Profile=()=>{

    const { userName } = useContext(App12Context);
    return (
        <div>
            <h1>Your username is {userName}</h1>
            <Changeprofile />
        </div>
    )
}