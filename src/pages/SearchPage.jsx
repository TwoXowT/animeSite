import React, {useEffect, useState} from "react";
import {
    Box,
    Button, CircularProgress,
    Container, FormControl, InputLabel,
    MenuItem, Pagination,
    Select,
    Typography,
} from "@mui/material";
import {useLocation} from "react-router-dom";
import {AnimeList} from "../components/AnimeList";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchAllGenres, fetchAnimelist, fetchByName, fetchByParams} from "../store/reducers/ActionCreators";

export const SearchPage = ()=>{
    const dispatch = useAppDispatch()
    const {animeList,currentPage,hasNextPage,isLoading,error,genres,years} =  useAppSelector(state=> state.animeReducer)

    let location = useLocation()
    console.log("ID",location.state)

    const [currentYear,setCurrentYear] = useState('')
    const [currentGenres,setCurrentGenres] = useState('')
    const [currentOrder, setCurrentOrder] = useState('popularity')
    const [currentSort, setCurrentSort] = useState('asc')
    useEffect(()=>{
        dispatch(fetchAllGenres())
    },[])

    useEffect(()=>{
        if(location.state === undefined){
            dispatch(fetchAnimelist())
        }else{

        }
    },[location.state])

    function handleChangeGenre(e){
        if(e.target.value === 'any'){
            setCurrentGenres('')
            return
        }
        setCurrentGenres(e.target.value)
    }
    function handleChangeAge(e){
        if(e.target.value === 'any'){
            setCurrentYear('')
            return
        }
        setCurrentYear(e.target.value)
    }
    function handleChangeOrder(e){
        setCurrentOrder(e.target.value)
    }

    function handleChangeSort(e){
        setCurrentSort(e.target.value)
    }



    function handleClick(event,page= 1){
        location.state = null
        const data = [currentGenres,currentYear,page,currentOrder,currentSort]
        dispatch(fetchByParams({data}))
    }
    const handleChange = (event,page)=>{
        if(location.state){
            console.log('iamhere')
            const data = [location.state,page]
            dispatch(fetchByName({data}))
            return
        }
      handleClick(event,page)
    }

    const GenresSelect = ()=>{
        return(
            <FormControl sx={style.form_control}>

                <InputLabel id='genre'>Genre</InputLabel>
                <Select sx={style.select}
                        autoWidth
                        labelId='genre'
                        label='Genre'
                        value={currentGenres}
                        onChange={handleChangeGenre}
                >
                    <MenuItem value='any'>Any</MenuItem>
                    {genres.map((item,index)=>{
                        return <MenuItem key={index} value={item.mal_id}>{item.name}</MenuItem>
                    })}

                </Select>
            </FormControl>

        )

    }

    const OrderSelect = ()=>{
        return(
            <FormControl sx={style.form_control}>
                <InputLabel id='order'>Order by</InputLabel>
                <Select sx={style.select}
                        autoWidth
                        labelId='order'
                        label='order by'
                        value={currentOrder}
                        onChange={handleChangeOrder}
                        >
                    <MenuItem value='title'>Name</MenuItem>
                    <MenuItem value='rating'>Rating</MenuItem>
                    <MenuItem value='popularity'>Popular</MenuItem>
                </Select>
            </FormControl>
        )
    }

    const SortSelect = ()=>{
        return(
            <FormControl sx={style.form_control}>
                <InputLabel id='sort'>Sort</InputLabel>
                <Select sx={style.select}
                        autoWidth
                        labelId='sort'
                        label='sort'
                        value={currentSort}
                        onChange={handleChangeSort}
                >
                    <MenuItem value='asc'>Asc</MenuItem>
                    <MenuItem value='desc'>Desc</MenuItem>
                </Select>
            </FormControl>
        )
    }

    const YearSelect = ()=>{
        return(
            <FormControl sx={style.form_control}>

                <InputLabel id="year">Year</InputLabel>
                <Select sx={style.select}
                        autoWidth
                        labelId='year'
                        label='year'
                        value={currentYear}
                        onChange={handleChangeAge}
                >
                    {years.map((item,index)=>{
                        return <MenuItem key={index} value={item}>{item}</MenuItem>
                    })}
                    <MenuItem value='any'>Any</MenuItem>
                </Select>
            </FormControl>

        )
    }

    const style = {
        container: {
            display: 'flex',
            margin: '10px auto',
            flexFlow: 'column wrap'

        },

        select:{
            minWidth: '100px',
            color: 'black',
        },
        pagination:{
            paddingTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        params_container:{
            flexFlow:'row wrap',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start'
        },
        form_control:{
            margin: '10px 10px'
        },
        button:{
            margin: '5px 0px',
            width: '200px',
        }
    }
    return(
        <>
            <>
                <Container sx={style.container}>
                    <Typography variant='h5'>Search params</Typography>
                    <Box sx={style.params_container}>
                        <GenresSelect/>
                        <YearSelect/>
                        <OrderSelect/>
                        <SortSelect/>

                    </Box>

                    <Button sx={style.button} variant="outlined" onClick={handleClick}>Search</Button>

                </Container>

            </>

            {location.state && <h4>Результыт по запросу {location.state}</h4>}
            {(!isLoading && animeList.length !== 0)?(
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

        </>
    )
}