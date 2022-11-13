import './App.css';
import React, {useEffect, useState} from "react";
import {AnimeList} from "./components/AnimeList";
import {Box, Pagination} from "@mui/material";
import {Navbar} from "./components/Navbar";
import API from "./API";

export const App = ()=> {

    const [list,setList] = useState()
    const [isLoading,setIsLoading]= useState(true)
    const [filter, setFilter] = useState('top-airing')
    const [currentPage,setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)


    useEffect(()=>{
        fetchFilterData(1,filter)


    },[filter])

    function fetchFilterData(page,filter){
        setIsLoading(true)
        API.fetchFilterData(page,filter)
            .then(animelist =>  {
                setList(animelist.results)
                setCurrentPage(Number(animelist.currentPage))
                setHasNextPage(animelist.hasNextPage)
                setIsLoading(false)
            })


    }

    function fetchInputData(page,text){
        setIsLoading(true)
        API.fetchInputData(page,text).then(animelist=>{
            setList(animelist.results)
            setCurrentPage(Number(animelist.currentPage))
            setHasNextPage(animelist.hasNextPage)
            setIsLoading(false)
        })

    }


    const handleChange = (event,page)=>{
        console.log('PAGE',page)
        if(text){
            fetchInputData(page,text)
        }
        fetchFilterData(page,filter)
    }

    const style = {
        pagination:{
            paddingTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    const [text,setText] = useState('')

    function handleInput(e){
        setText(e.target.value)
    }
    function handleKeyDown(e){
        if (e.key === "Enter") {
            setFilter('')
            fetchInputData(1,text)

        }

    }
  return (
    <div className="App">

        <input onChange={handleInput} onKeyDown={handleKeyDown}/>

        <Navbar  filter = {filter} setFilter={setFilter}/>

        {!isLoading?(<AnimeList list={list}/>):(<h1>Loading...</h1>)}
        <Box sx={style.pagination}>
            <Pagination
                        page={currentPage}
                        count={hasNextPage?(currentPage + 1):(currentPage)}
                        onChange={handleChange}
                        siblingCount={1}
                        boundaryCount={3}
            />
        </Box>

    </div>
  )
}

