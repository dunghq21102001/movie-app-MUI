import { Box } from '@mui/material'
import React from 'react'
import MovieCard from '../Components/MovieCard'
import Rightbar from '../Components/Rightbar'
import { data } from '../data'
function Home() {

    return (
        <Box display='flex' justifyContent='space-around'>
            <Rightbar />
            <Box sx={{ width: { xs: '100%', sm: '80%' }, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#1c1c1c' }}>
                {data.map((m) => (
                    <MovieCard key={m.id} m={m} />
                ))}
            </Box>
        </Box>
    )
}

export default Home