import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface  UserState {
    email: string;
    passw: string;
    favoriteAnime: any[];

}

const initialState: UserState = {
    email: '',
    passw: '',
    favoriteAnime: []
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavorite :(state,action)=>{
            console.log('1')
            state.favoriteAnime.push(action.payload)
        },
        removeFavorite: (state,action)=>{
            const index = state.favoriteAnime.findIndex((item)=>item.mal_id === action.payload.mal_id)
            state.favoriteAnime.splice(index,1)
        }
    },



})
export default UserSlice.reducer;
export const { addFavorite,removeFavorite} = UserSlice.actions;