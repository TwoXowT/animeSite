import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AnimeList} from "../components/AnimeList";


export const FavoritePage = ()=>{
    const dispatch = useAppDispatch()
    const {favoriteAnime} =  useAppSelector(state=> state.userReducer)
    console.log('data',favoriteAnime)
    return(
        <>

        {favoriteAnime.length === 0 && <h1> Empty favorite list</h1>}
            {favoriteAnime &&<AnimeList list={favoriteAnime} />}

        </>
    )
}