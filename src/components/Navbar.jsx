import React, {useState} from 'react';
import { Box, InputBase} from "@mui/material";
import {Link, useRouteMatch} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {useAppDispatch} from "../hooks/redux";
import {fetchByName} from "../store/reducers/ActionCreators";

export const Navbar = ()=>{

    const dispatch = useAppDispatch()
    const style = {
        container:{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            padding:'10px 0px ',
            height: 'auto',
            backgroundColor:  '#6786e3',
            alignItems: 'center',
        },
        linkGroup:{
            width: '300px',
            display: 'flex',
            padding: '5px 10px',
            fontSize: '20px',
            flexFlow: 'row',
            justifyContent: 'space-between'
        },
        link:{
            textDecoration: 'none',
            color: '#fafafa',
        },

        input:{
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '5px 20px'
        },
        input_container:{

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

            const data = [text,1]
            dispatch(fetchByName({data}))
            let query = `${path}search`
            setText('')

            history.push(query,text)


        }

    }

    return(
        <Box sx={style.container}>
            <Box sx={style.input_container}>
                <InputBase sx={style.input} value={text} placeholder='search...' onChange={handleInput} onKeyDown={handleKeyDown}/>
            </Box>
            <Box sx={style.linkGroup}>
                <Link style={style.link}
                    to='/search'>
                    <Box>Genre</Box>
                </Link>
                <Link style={style.link}
                    to='/favorite'>
                    <Box>Favorite</Box>
                </Link>
                <Link
                    style={style.link}
                    to='/anime'>
                    <Box>Anime</Box>
                </Link>
            </Box>

        </Box>

    )
}