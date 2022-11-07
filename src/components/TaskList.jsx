import React from 'react';
import {Task} from "./Task";
import {Container} from "@mui/material";


export const TaskList = (props)=>{

    console.log(props)
    return(
        <Container>
            {props.tasklist.map((item,index)=>{
                return <Task key={item.id} task={item}/>
            })}
        </Container>
    )
}


