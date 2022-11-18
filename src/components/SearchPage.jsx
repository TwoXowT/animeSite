import React, {useEffect, useState} from "react";
import {AnimeList} from "./AnimeList";
import {
    Box,
    Button, CircularProgress,
    Container,
    MenuItem, Pagination,
    Select,
    Typography
} from "@mui/material";
import API from "../API";
import {useLocation} from "react-router-dom";

export const SearchPage = ()=>{
    let location = useLocation()
    console.log("ID",location.state)

    const [list,setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [genres,setGenres] = useState([])
    const [years,setYears] = useState([2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022])
    const [currentYear,setCurrentYear] = useState('')
    const [currentGenres,setCurrentGenres] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [hasNextPage,setHasNextPage] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            API.fetchGenres().then(response=>{
                setGenres(response.data)
            })
        },1000)




    },[])


    useEffect(()=>{
        if(location.state){
            setIsLoading(true)
            API.fetchInputData(1,location.state).then(response=>
                {
                    setList(response.data)
                    setCurrentPage(Number(response.pagination.current_page))
                    setHasNextPage(response.pagination.has_next_page)
                    setIsLoading(false)
                }

            )

        }else{
            setIsLoading(true)
            API.fetchFilterData(1,'top').then(response=>{
                    setList(response.data)
                    setCurrentPage(Number(response.pagination.current_page))
                    setHasNextPage(response.pagination.has_next_page)
                    setIsLoading(false)
            }

            )
        }
    },[location])

    function handleChangeGenre(e){
        setCurrentGenres(e.target.value)
    }
    function handleChangeAge(e){
        setCurrentYear(e.target.value)
    }

    function handleClick(event,page=1){
        setIsLoading(true)
        API.fetchAnimeByParams(currentGenres,currentYear,page)
            .then(response=>{

                    setList(response.data)
                    setCurrentPage(Number(response.pagination.current_page))
                    setHasNextPage(response.pagination.has_next_page)
                setIsLoading(false)
            }
               )
    }
    const handleChange = (event,page)=>{
      handleClick(event,page)
    }

    const GenresSelect = ()=>{
        return(
            <Select sx={style.select}
                    label='Genre'
                    value={currentGenres}
                    onChange={handleChangeGenre}
            >
                {genres.map((item,index)=>{
                    return <MenuItem key={index} value={item.mal_id}>{item.name}</MenuItem>
                })}
            </Select>
        )

    }
    const YearSelect = ()=>{
        return(
            <Select sx={style.select}
                    label='Age'
                    value={currentYear}
                    onChange={handleChangeAge}
            >
                {years.map((item,index)=>{
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
        )
    }
    const style = {
        container: {
            display: 'flex',
            margin: '30px auto',

        },

        select:{
            width: '100px',
            margin: '0 30px',
            color: 'black'
        },
        pagination:{
            paddingTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
    return(
        <>
            <>
                <Container sx={style.container}>
                    <Typography variant='h4'>Search params</Typography>
                   <GenresSelect/>
                    <YearSelect/>

                    <Button onClick={handleClick}>Search</Button>
                </Container>

            </>

            {}
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

        </>
    )
}