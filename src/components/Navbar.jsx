import React, {useEffect, useState} from 'react';
import {AppBar, Box, Button, Input, InputBase, TextField, Typography} from "@mui/material";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import { Redirect ,useHistory} from 'react-router-dom';
import {SearchPage} from "./SearchPage";
import {AnimePage} from "./AnimePage";
export const Navbar = ()=>{


    const style = {
        container:{
            display: 'flex',
            flexFlow: 'row wrap',
            width: '100vw',
            justifyContent: 'center',
            height: '50px',
            backgroundColor:  '#6786e3',
            alignItems: 'center',
        },
        linkGroup:{
            width: '300px',
            display: 'flex',
            fontSize: '20px',
            flexFlow: 'row',
            justifyContent: 'space-between'
        },

        input:{
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '3px 20px'
        }

    }


    const [text,setText]= useState('');
    function handleInput(e){
        setText(e.target.value)
    }
    const { path } = useRouteMatch();
    let history = useHistory()
    function handleKeyDown(e){
        if (e.key === "Enter") {
            let query = `${path}search`
            setText('')
            history.push(query,text)

        }

    }

    return(
        <Box sx={style.container}>
            <Box sx={style.input_container}>
                <InputBase sx={style.input} value={text} onChange={handleInput} onKeyDown={handleKeyDown}/>
            </Box>
            <Box sx={style.linkGroup}>
                <Link  to='/search'>
                    <Box>Genre</Box>
                </Link>
                <Link  to='/anime'>
                    <Box>Anime</Box>
                </Link>
            </Box>

        </Box>

    )
}