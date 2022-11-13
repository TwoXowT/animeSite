import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const Navbar = (props)=>{
    const handleChange = (event)=>{
        props.setFilter(event.target.value)
    }
    return(
        <Box>
            This is Navbar
            <FormControl fullWidth>
                <InputLabel>Sort by</InputLabel>
                <Select
                    value={props.filter}
                    label="variant"
                    onChange={handleChange}
                >
                    <MenuItem value='popular'>popular</MenuItem>
                    <MenuItem value='recent-release'>Recent</MenuItem>
                    <MenuItem value='top-airing'>Top airing</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}