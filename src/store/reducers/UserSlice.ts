import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface  UserState {
    email: string;
    passw: string;
    favoriteAnime: any[];
    favoriteAnimeId:any[];

}


const initialState: UserState = {
    email: '',
    passw: '',
    favoriteAnime: JSON.parse(<string>localStorage.getItem('favoriteAnime')),
    favoriteAnimeId: JSON.parse(<string>localStorage.getItem('favoriteAnimeId')),
}

function init(){
    let promise = new Promise(async (resolve, reject) => {
        const response = await axios.get(`http://localhost:3000/users?id=2`)
        const result = {
            email: response.data.email,
            passw: response.data.payload,
            favoriteAnime: response.data.favoriteAnime,
            favoriteAnimeId: response.data.favoriteAnimeId
        }
        return result
    })
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavorite :(state,action)=>{
            state.favoriteAnime.push(action.payload)
            state.favoriteAnimeId.push(action.payload.mal_id)
            localStorage.setItem('favoriteAnime',JSON.stringify(state.favoriteAnime))
            localStorage.setItem('favoriteAnimeId',JSON.stringify(state.favoriteAnimeId))
        },
        removeFavorite: (state,action)=>{
            const index = state.favoriteAnime.findIndex((item)=>item.mal_id === action.payload.mal_id)
            state.favoriteAnime.splice(index,1)
            const index1 = state.favoriteAnimeId.findIndex((item)=>item === action.payload.mal_id)
            state.favoriteAnimeId.splice(index1,1)
            localStorage.setItem('favoriteAnime',JSON.stringify(state.favoriteAnime))
            localStorage.setItem('favoriteAnimeId',JSON.stringify(state.favoriteAnimeId))
        }
    },



})
export default UserSlice.reducer;
export const { addFavorite,removeFavorite} = UserSlice.actions;