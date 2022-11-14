import React, {useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link, useRouteMatch, Switch,
    Route,} from "react-router-dom";
import {AnimePage} from "./AnimePage";

export const AnimeCard = (props)=>{
    const [isHover, setIsHover] = useState(false)

    let { path, url } = useRouteMatch();
    const style = {
        container: {
            width: '200px',
            padding: '10px 10px',
        },

        title:{
            width: 'inherit',
            wordWrap: 'break-word',
        },

        image:{
            width: '200px',
            height: '300px',
            transition: '0.4s',
            filter: isHover ? ('brightness(70%)'):(''),
        },


    }

    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

return(
        <Box sx={style.container}>
            <Link to={`${url}/${props.item.mal_id}`}>
                <Box component='img'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     sx={style.image}
                     src={props.item.images.jpg.image_url}
                />
            </Link>
            <Box sx={style.info_container}>
                <Typography variant="p" sx={style.title}>
                    <Link to={`${url}/${props.item.mal_id}`}>
                        {props.item.title}
                    </Link>
                </Typography>

            </Box>
            <Switch>
                <Route path={`${path}/:${props.item.mal_id}`} children={<AnimePage/>}/>
            </Switch>
        </Box>

    )
}