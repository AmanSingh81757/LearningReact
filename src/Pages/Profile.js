import { Changeprofile } from "./Changeprofile"

export const Profile=(props)=>{
    return (
        <div>
            <h1>Your username is {props.userName}</h1>
            <Changeprofile setUserName={props.setUserName}/>
        </div>
    )
}