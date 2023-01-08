import React from 'react';
import {Container, ImageList} from "@mui/material";
import {AnimeCard} from "./AnimeCard";

export const AnimeList = (props)=>{
    const style = {
        width: 'inherit',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',

    }
    console.log('ANIMELIST', props.list)
    return(
        <Container>
            <ImageList sx={style}>

                {props.list.map((item,index)=>{
                    return <AnimeCard item={item} key={index}/>
                })}

            </ImageList>
        </Container>

    )
}