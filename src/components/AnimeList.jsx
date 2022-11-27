import React from 'react';
import {Box, Container, Pagination} from "@mui/material";
import {AnimeCard} from "./AnimeCard";

export const AnimeList = (props)=>{
    const style = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',

    }




    return(
        <Container sx={style}>

            {props.list.map((item,index)=>{
                return <AnimeCard item={item} key={index}/>
            })}

        </Container>
    )
}