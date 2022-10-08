import { Box, Button, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data, movieSomingSoonData } from '../data'
function MovieDetail() {
  const [open, setOpen] = useState(false)
  const param = useParams()
  const movieId = param.id
  const movie = data.find((d) => {
    return d.id === movieId
  })
  const popup = (
    <Box sx={{ position: 'fixed', zIndex: 10, width: '100%', top: 0, bottom: 0, left: 0, right: 0 }} >
      <Box onClick={() => setOpen(!open)} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'absolute', width: '100%', height: '100%' }} />
      <Box sx={{ position: 'relative', top: '50%', left: '50%', translate: '-50% -50%', width: { xs: '100%', sm: '60%' }, height:{ xs: '50%', sm: '70%' } }}>
        <iframe className='iframe' style={{
          width: '100%', height: '100%'
        }} src={`https://www.youtube.com/embed/${movie.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Box>
    </Box>
  )
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px' }} >
      <Box sx={{ width: { xs: '100%', md: '66%' }, backgroundColor: '#1c1c1c', padding: '0 20px 20px 20px' }}>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <CardMedia
            component="img" sx={{ width: '100%', display: 'block', margin: '30px auto', userSelect: 'none' }}
            alt={movie.title}
            image={movie.image}
          />
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', position: 'absolute', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.6)', paddingTop: '10px', paddingBottom: '10px' }}>
            <Button sx={{ backgroundColor: 'red', width: { xs: '35%', sm: '20%' }, color: 'white' }}>Watching</Button>
            <Button sx={{ backgroundColor: 'green', width: { xs: '35%', sm: '20%' }, color: 'white' }} onClick={() => setOpen(!open)}>Trailer</Button>
          </Box>
        </Box>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Name: {movie.title}
        </Typography>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Nation: {movie.nation}
        </Typography>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Year: {movie.year}
        </Typography>
        <Typography variant='subtitle1' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Description: {movie.des}
        </Typography>
        <Stack spacing={1} sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography variant='h6' sx={{ color: 'white', marginTop: '8px', marginRight: '5px' }}>
            Rating:
          </Typography>
          <Rating name="half-rating-read" defaultValue={movie.star} precision={1} readOnly />
        </Stack>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '26%', backgroundColor: '#1c1c1c' }}>
        <Typography variant='h5' textAlign='center' color='white' marginTop='25px' marginBottom='10px'>
          Movies Coming Soon
        </Typography>
        <Box width='100%'>
          {movieSomingSoonData.map((mcs) => (
            <Box key={mcs.id} width='100%' sx={{ display: 'flex' }}>
              <CardMedia component='img' src={mcs.image} alt={mcs.title} sx={{ width: '40%', padding: '0 10px', marginBottom: '10px' }} />
              <Box>
                <Typography variant='h6' color='white'>{mcs.title}</Typography>
                <Typography variant='h6' color='white'>{mcs.year}</Typography>
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={mcs.star} precision={1} readOnly />
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {open ? popup : ''}
    </Box >
  )
}

export default MovieDetail