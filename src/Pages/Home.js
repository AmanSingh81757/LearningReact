import { useContext } from "react"
import { App12Context } from "../App"


export const Home=()=>{

    const { userName } = useContext(App12Context);

    return (
        <div>
            <h1>This is the home page</h1>
            <h1>Your username is {userName}</h1>
        </div>
    )
}