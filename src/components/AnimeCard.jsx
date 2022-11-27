import React, {useEffect, useState} from 'react';
import {Box, Button, Checkbox, Container, Typography} from "@mui/material";
import {Link, useRouteMatch, Switch,
    Route,} from "react-router-dom";
import {AnimePage} from "../pages/AnimePage";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addFavorite, removeFavorite} from "../store/reducers/UserSlice";
import {Favorite} from "@mui/icons-material";

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const AnimeCard = (props)=>{
    const {favoriteAnime} =  useAppSelector(state=> state.userReducer)
    const [isHover, setIsHover] = useState(false)
    const dispatch = useAppDispatch()
    let { path, url } = useRouteMatch();
    const style = {
        container: {
            width: '200px',
            padding: '10px 10px',
        },

        title:{
            width: '100%',
        },

        image:{
            width: '200px',
            height: '300px',
            transition: '0.4s',
            filter: isHover ? ('brightness(70%)'):(''),
        },
        score:{
            position: 'absolute',
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',

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
    }

    const [checked,setChecked] = useState(initialChecked)

    function initialChecked(){
        return !!favoriteAnime.includes(props.item);

    }


    useEffect(()=>{
        if(checked){
            if(!favoriteAnime.includes(props.item)){
                console.log('trues')
                dispatch(addFavorite(props.item))
            }
        }else{
            if(favoriteAnime.includes(props.item)){
                dispatch(removeFavorite(props.item))
            }
        }
    },[checked])



return(
        <Box sx={style.container}>
            <Typography sx={style.score}>{props.item.score}</Typography>
            <Link to={`anime/${props.item.mal_id}`}>
                <Box component='img'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     sx={style.image}
                     src={props.item.images.jpg.image_url}
                />

            </Link>
            <Box sx={style.info_container}>
                <Typography variant="p" sx={style.title}>
                    <Link sx={style.title} to={`anime/${props.item.mal_id}`}>
                        {props.item.title}
                    </Link>
                </Typography>

                <Checkbox
                    onChange={handleChange}
                    checked={checked}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />

            </Box>
            <Switch>
                <Route path={`anime/:${props.item.mal_id}`} children={<AnimePage/>}/>
            </Switch>
        </Box>

    )
}