import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {
    useParams
} from "react-router-dom";
import {AnimeList} from "./AnimeList";
export const AnimePage = ()=>{
    let { id } = useParams();
    const [isLoading,setIsLoading]= useState(true)
    const [data,setData] = useState('')

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://api.consumet.org/anime/gogoanime/info/${id}`)
            .then((response) => response.json())
            .then((animeDetails) => {
                setData(animeDetails)
                setIsLoading(false)
            });

    },[])
    useEffect(()=>{
        console.log(data)
    },[data])
    const Card = ()=>{
        return(
            <>
                <h1>{data.title}</h1>
                <img alt='img' src={data.image}/>
                <p>{data.synopsis}</p>
                <ul>
                    {data.genres.map(item=><li>{item}</li>)}
                </ul>
            </>
        )
    }
    return (
        <>
            {!isLoading?(
               <Card/>
            ):(<h1>Loading...</h1>)}

        </>

    )
}