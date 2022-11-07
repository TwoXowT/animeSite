import React from 'react';
import {Box,IconButton} from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export const Navbar= (props)=>{

    console.log(props)
    return(
        <Box>
            <IconButton
                    children={TaskAltIcon}
            />
        </Box>
    )
}
