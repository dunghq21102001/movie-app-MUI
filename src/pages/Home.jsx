import { Box } from '@mui/material'
import React from 'react'
import MovieCard from '../Components/MovieCard'
import { data } from '../data'
function Home() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {data.map((m) => (
                <MovieCard key={m.id} m={m} />
            ))}
        </Box>
    )
}

export default Home