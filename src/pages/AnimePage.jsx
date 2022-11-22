import React, {useEffect, useState} from 'react';
import {
    useParams} from "react-router-dom";
import API from "../API";
import {
    Box, CircularProgress,
    Container, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";

export const AnimePage = () => {

    let {mal_id} = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        setIsLoading(true)
        API.fetchAnimeInfo(mal_id).then(response => {
            setData(response)
            setIsLoading(false)
        })

    }, [])
    console.log(data)

    const style = {

        main_container: {

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexFlow: 'column wrap',
        },

        container: {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',

        },

        img_container:{
            display: 'flex',
            alignItems: 'center',
        },

        info_container: {
            padding: '0px 20px',
        },

        rating: {
            display: 'flex',
            alignItems: 'center',
        },


    }

    const Card = () => {
        return (
            <>
                <Container sx={style.main_container}>
                    <h2>{data.title}</h2>
                    <Box sx={style.container}>
                        <Box sx={style.img_container}>
                            <img alt='img' src={data.images.jpg.image_url}/>
                        </Box>
                        <Box sx={style.info_container}>

                            <TableContainer sx={style.table_container}>
                                <Table>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Rating:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.score}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Airing:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.aired.string}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Status:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.status}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Producers:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.producers.map(item => {
                                                    return `${item.name}, `
                                                })}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Rank:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.rating}
                                            </TableCell>
                                        </TableRow>


                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <b>Genres:</b>
                                            </TableCell>
                                            <TableCell align='left'>
                                                {data.genres.map(item => {
                                                    return `${item.name}, `
                                                })}
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>

                            </TableContainer>

                        </Box>
                    </Box>


                    {/*<p>{data.synopsis}</p>*/}
                    {/*<ul>*/}
                    {/*    {data.genres.map(item=><li>{item}</li>)}*/}
                    {/*</ul>*/}
                    <h1>About anime</h1>
                    <Typography>{data.synopsis}</Typography>
                </Container>

            </>
        )
    }
    return (
        <>
            {!isLoading ? (
                <Card/>
            ) : (<CircularProgress />)}

        </>

    )
}