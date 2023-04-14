import { Changeprofile } from "./Changeprofile"
import { useContext } from "react"
import { App12Context } from "../App"

export const Profile=()=>{

    return (
        <div>
            <h1>Your username is</h1>
            <Changeprofile />
        </div>
    )
}