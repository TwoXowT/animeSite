import React, {useEffect} from "react";
import {CircularProgress, Pagination} from "@mui/material";

import {AnimeList} from "./components/AnimeList";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import { fetchAnimelist} from "./store/reducers/ActionCreators";

import './App.css';

export const App = ()=> {

    const dispatch = useAppDispatch()
    const {animeList,currentPage,hasNextPage,isLoading,error} =  useAppSelector(state=> state.animeReducer)

    useEffect( () => {
        dispatch(fetchAnimelist())
    },[])

    const style = {
        pagination:{
            paddingTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    const handleChange = (event,page)=>{
        dispatch(fetchAnimelist(page))
    }

  return (
    <div className="App">


        {!isLoading? (
            <>
                <AnimeList list={animeList}/>
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

