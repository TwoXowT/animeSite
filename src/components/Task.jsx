import React from 'react';


export const Task = (props)=>{

    console.log(props)
    return(
        <div>
            <h1>{props.task.text}</h1>
        </div>
    )
}
