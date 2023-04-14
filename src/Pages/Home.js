import { useContext } from "react"
import { App12Context } from "../App"
import { useQuery } from "@tanstack/react-query";


export const Home=()=>{

    const {} = useQuery(["cat"], );

    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    )
}