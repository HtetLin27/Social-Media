import { Box,AppBar, styled, Toolbar, Typography,InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material';
import {React,useState} from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
const Search = styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
       <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>Social Media</Typography>
       <CatchingPokemonIcon sx={{display:{xs:'block',sm:'none'}}}/>
       <Search><InputBase placeholder='seacrch...'/></Search>
       <Icons>
        <Badge badgeContent={4} color="error">
            <EmailIcon/>
        </Badge>
        <Badge badgeContent={2} color="error">
            <NotificationsIcon/>
        </Badge>
        <Avatar 
         sx={{width:30, height:30}}
         src="https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         onClick={e=>setOpen(true)}
         />
       </Icons>
       <UserBox   onClick={e=>setOpen(true)}>
       <Avatar
        sx={{width:30, height:30}}
         src="https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
         <Typography variant='span'>Htet</Typography>
       </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem> Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar