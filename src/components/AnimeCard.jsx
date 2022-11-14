import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link, useRouteMatch, Switch,
    Route,} from "react-router-dom";
import {AnimePage} from "./AnimePage";

export const AnimeCard = (props)=>{


    let { path, url } = useRouteMatch();
    const style = {
        container: {
            width: '200px',
            height: '400px',
            padding: '10px 10px',
        },

        info_container:{
            bgcolor: '#fafafa',
        },

        title:{
            width: 'inherit',
            height: '50px',
            wordWrap: 'break-word',
        },

        image:{
            width: '200px',
            height: '300px',
        }


    }


    return(
        <Box sx={style.container}>
            <Box component='img'
                 sx={style.image}
                 src={props.item.images.jpg.image_url}
            />
            <Box sx={style.info_container}>
                <Typography variant="h5" sx={style.title}>
                    <Link to={`${url}/${props.item.mal_id}`}>
                        {props.item.title}
                    </Link>
                </Typography>
                <Typography variant="h1" sx={style.title}>
                    {props.item.totalEpisodes}
                </Typography>
            </Box>
            <Switch>
                <Route path={`${path}/:${props.item.mal_id}`} children={<AnimePage/>}/>
            </Switch>
        </Box>

    )
}