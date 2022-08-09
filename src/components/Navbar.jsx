import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
const Search = styled("div")(({theme})=>({
    backgroundColor:'white'
}))

function Navbar() {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
       <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>Social Media</Typography>
       <CatchingPokemonIcon sx={{display:{xs:'block',sm:'none'}}}/>
       <Search>Search</Search>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar