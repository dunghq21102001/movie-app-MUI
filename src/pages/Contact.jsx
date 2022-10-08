import { Box, Button, CardMedia, TextField } from '@mui/material'
import React from 'react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Box display='flex' justifyContent='space-around' alignItems='center' width='100%' >
      <form onSubmit={handleSubmit} className='contact-form'>
        <Box sx={{
          backgroundColor: 'white', margin: '30px auto', display: 'flex',
          flexDirection: 'column', padding: '20px 0 60px 0', position: 'relative', minHeight: '300px', width: { xs: '100%', sm: '100%' }, justifyContent: 'space-around'
        }}>
          <TextField sx={{ width: '80%', margin: '0 auto', color: 'white' }} id="name" label="Your name" variant="standard" />
          <TextField sx={{ width: '80%', margin: '0 auto', color: 'white' }} id="email" label="Email" variant="standard" />
          <TextField sx={{ width: '80%', margin: '0 auto', color: 'white' }} id="message" label="Your message" variant="standard" multiline rows={3} />
          <Button sx={{ width: { xs: '60%', sm: '20%' }, position: 'absolute', right: '15px', bottom: '10px' }} type='submit' variant='contained'>Send Message</Button>
        </Box>
      </form>
      <CardMedia sx={{ display: { xs: 'none', sm: 'block' }, width: '35%' }} component='img' src='https://i.pinimg.com/originals/7b/df/16/7bdf164aaed98d4336084d0b33e3e588.gif' alt='contact img'>

      </CardMedia>
    </Box>
  )
}

export default Contact