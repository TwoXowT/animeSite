
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllGenres, fetchAnimelist, fetchByName, fetchByParams} from "./ActionCreators";
interface  AnimeState {
    currentPage: number;
    hasNextPage: boolean;
    animeList: [];
    isLoading: boolean;
    error: string;
    genres: [];
    years: string[];
}

const initialState: AnimeState = {
    animeList: [],
    currentPage: 1,
    hasNextPage: true,
    isLoading: false,
    genres: [],
    error: '',
    years: ['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009'],
}

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers:{

    },
    extraReducers:{
        //FETCHANIMELIST
        [fetchAnimelist.fulfilled.type]:(state,action)=>{
            state.isLoading = false;
            state.error = '';
            state.animeList = action.payload.data;
            state.currentPage = action.payload.pagination.current_page;
            state.hasNextPage = action.payload.pagination.has_next_page;
        },
        [fetchAnimelist.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [fetchAnimelist.rejected.type]:(state,action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload
        },

        ///FETCHALLGENRES
        [fetchAllGenres.fulfilled.type]:(state,action)=>{
            state.isLoading = false;
            state.genres = action.payload.data
        },
        [fetchAllGenres.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [fetchAllGenres.rejected.type]:(state,action)=>{
            state.isLoading = false;
        },

        ///FETCHBYPARAMS
        [fetchByParams.fulfilled.type]:(state,action)=>{
            state.isLoading = false;
            state.animeList = action.payload.data;
            state.currentPage = action.payload.pagination.current_page;
            state.hasNextPage = action.payload.pagination.has_next_page;
        },
        [fetchByParams.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [fetchByParams.rejected.type]:(state,action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload
        },


        //FETCHBYNAME
        [fetchByName.fulfilled.type]:(state,action)=>{
            state.animeList = action.payload.data;
            state.currentPage = action.payload.pagination.current_page;
            state.hasNextPage = action.payload.pagination.has_next_page;
            state.isLoading = false;
        },
        [fetchByName.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [fetchByName.rejected.type]:(state,action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload
        },




    }
})

export default animeSlice.reducer;