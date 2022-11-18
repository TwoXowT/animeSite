import './App.css';
import React, {useEffect, useState} from "react";
import {AnimeList} from "./components/AnimeList";
import {Box, CircularProgress, Pagination} from "@mui/material";
import API from "./API";

export const App = ()=> {
    const [list,setList] = useState()
    const [isLoading,setIsLoading]= useState(true)
    const [filter, setFilter] = useState('top')
    const [currentPage,setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)

    useEffect(()=>{
    },[])

    useEffect(()=>{
        fetchFilterData(1,filter)
    },[filter])

    function fetchFilterData(page,filter){
        setIsLoading(true)
        API.fetchFilterData(page,filter)
            .then(animelist =>  {
                setList(animelist.data)
                setCurrentPage(Number(animelist.pagination.current_page))
                setHasNextPage(animelist.pagination.has_next_page)
                setIsLoading(false)
            })


    }

    function fetchInputData(page,text){
        setIsLoading(true)
        API.fetchInputData(page,text).then(animelist=>{
            setList(animelist.data)
            setCurrentPage(Number(animelist.pagination.current_page))
            setHasNextPage(animelist.pagination.has_next_page)
            setIsLoading(false)
        })

    }

    const style = {
        pagination:{
            paddingTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    const handleChange = (event,page)=>{
        fetchFilterData(page,'top')
    }

  return (
    <div className="App">


        {!isLoading?(
            <>
                <AnimeList list={list}/>
                <Pagination
                    sx={style.pagination}
                    page={currentPage}
                    count={hasNextPage?(currentPage + 1):(currentPage)}
                    onChange={handleChange}
                    siblingCount={1}
                    boundaryCount={3}
                />
            </>
            ):(<CircularProgress />)}


    </div>
  )
}

