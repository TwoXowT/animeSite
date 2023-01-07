import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = 'https://api.jikan.moe/v4/'
export const fetchAnimelist = createAsyncThunk(
    'anime/fetchAll',
    async(page:number=1)=>{
        try{
            const response = await axios.get(`${BASE_URL}top/anime?page=${page}`)
            return response.data
        }catch(e){
            return 'error'
        }

    }
)


export const fetchAllGenres = createAsyncThunk(
    'anime/genres',
    async(_,)=>{
        try{
            const response =  await axios.get(`${BASE_URL}genres/anime`)
            return response.data
        }catch(e){
            return 'error'
        }
    }
)

export const fetchByParams = createAsyncThunk(
    'anime/fetchByParams',
    async({data}:any,)=>{
        const [currentGenres,currentYear,currentPage,currentOrder,currentSort] = data

        console.log('currentGenre',currentGenres)
        console.log('currentYear',currentYear)
        console.log('currentPage',currentPage)
        const genres = currentGenres?(`genres=${currentGenres}`):('')
        const year = currentYear?(`&start_date=${currentYear}`):('')
        const page = currentPage?(`&page=${currentPage}`):(`&page=1`)
        const order = currentOrder?(`&order_by=${currentOrder}`):('')
        const sort = currentSort?(`&sort=${currentSort}`):('')
        console.log('URL',`${BASE_URL}anime?${genres}${year}${page}${order}${sort}`)
        try{
            const response =  await axios.get(`${BASE_URL}anime?${genres}${year}${page}${order}${sort}`)
            console.log(response.data)
            return response.data
        }catch(e){

        }
    }
)


export const fetchByName= createAsyncThunk(
    'anime/fetchByName',
    async({data}:any)=>{
        try{
            const [text,page] = data
            console.log('URLI',`${BASE_URL}anime?q=${text}&page=${page}`)

            const response = await axios.get(`${BASE_URL}anime?q=${text}&page=${page}`)
            return response.data
        }catch(e){
            return 'error'
        }

    }
)