import React from 'react';
import {Container, Pagination} from "@mui/material";
import {AnimeCard} from "./AnimeCard";

export const AnimeList = (props)=>{
    const style = {
        display: 'flex',
        flexFlow: 'row wrap'

    }
    return(
        <Container sx={style}>

            {props.list.map((item,index)=>{
                return <AnimeCard item={item} key={index}/>
            })}

        </Container>
    )
}