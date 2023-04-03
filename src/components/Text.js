import React from "react";
import { useState, useEffect } from "react";

// the useiffecr is used to keep track of updation/ mounting of any component.
// whenever the component is mounted or rerendered the eseeffect code will be executed


// to only make the use effect work when the component is mounted use the [] argument after the function this array will contain all the
// things which on updation will trigger the use effect
export const Text=()=>{
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("cOMPONENT MOUNTED")


        // this function will be executed after the component is unmounted
        return ()=>{
            console.log("Component Unmounted");
        }
    }, []);
    // if we write text inside the array the use effect will be triggered when the text is updated
    // if nothing is entered it will be triggered  only once

    return (
        <div>
            <input onChange={(e)=>{
                setText(e.target.value);
            }}>
            </input>
            <h1>{text}</h1>
        </div>
    )
}