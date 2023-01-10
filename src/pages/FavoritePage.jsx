import {useAppSelector} from "../hooks/redux";
import {AnimeList} from "../components/AnimeList";
import { Typography } from '@mui/material';

export const FavoritePage = ()=>{
    const {favoriteAnime} =  useAppSelector(state=> state.userReducer)

    const style ={
        h1:{
            fontSize: '28px',
            margin: '30px auto',
            textAlign: 'center'
        }
    }
    return(
        <>

        {favoriteAnime.length === 0 && <Typography sx={style.h1} components='h1'> Empty favorite list</Typography>}
            {favoriteAnime &&<AnimeList list={favoriteAnime} />}

        </>
    )
}