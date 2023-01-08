import React, {useState} from 'react';
import {Box, Checkbox,IconButton, ImageListItem, ImageListItemBar} from "@mui/material";
import {Link, Switch, Route,} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {AnimePage} from "../pages/AnimePage";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addFavorite, removeFavorite} from "../store/reducers/UserSlice";


export const AnimeCard = (props)=>{
    const {favoriteAnimeId} =  useAppSelector(state=> state.userReducer)
    const [isHover, setIsHover] = useState(false)
    const dispatch = useAppDispatch()
    const [checked,setChecked] = useState(initialChecked)
    function initialChecked(){
        return !!favoriteAnimeId.includes(props.item.mal_id);
    }

    const style = {

        container:{
            margin: '5px',
            transition: '0.3s',
            boxShadow: checked ? ('0px 0px 10px 1px purple'):('')
        },
        image:{
            width: '200px',
            height: '300px',
            transition: '0.4s',
            filter: isHover ? ('brightness(70%)'):(''),
        },
        favorite:{
            position: 'absolute',
            color: 'white',
            fontWeight: '700',
            zIndex: '1',

        }


    }

    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }
    function handleChange(e) {

        setChecked(e.target.checked)
        if(e.target.checked){
            dispatch(addFavorite(props.item))
        }else{
            dispatch(removeFavorite(props.item))
            console.log('1')
        }
    }

    const FavoriteCheckbox = ()=>{
        return(
            <Checkbox color='secondary' fontSiza='large'
                      sx={style.favorite}
                      onChange={handleChange}
                      checked={checked}
                      icon={<FavoriteBorderIcon />}
                      checkedIcon={<FavoriteIcon />}
            />
        )
    }



    const Genres = ()=>{
        return(
            <>
                {props.item.genres.map(item=>{
                    return <span> {item.name} </span>
                })}
            </>
        )
    }

return(
    <ImageListItem key={props.item.mal_id} sx={style.container}>
            <FavoriteCheckbox/>
        <Link to={`anime/${props.item.mal_id}`}>
            <Box component='img'
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         sx={style.image}
                         src={props.item.images.jpg.image_url}
                    />
        </Link>
        <ImageListItemBar
            title={props.item.title}
            subtitle={<Genres/>}
            actionIcon={
                <IconButton aria-label={`info about ${props.item.title}`} >

                </IconButton>
            }

        />
        <Switch>
                     <Route path={`anime/:${props.item.mal_id}`} children={<AnimePage/>}/>
        </Switch>
    </ImageListItem>




    )
}