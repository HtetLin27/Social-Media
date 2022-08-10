import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box 
     flex={2} p={2} 
     sx={{display:{xs:'none',sm:'block'}}}
     width={300}
     >
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={9}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/11805711/pexels-photo-11805711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/13055817/pexels-photo-13055817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/11805711/pexels-photo-11805711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/13055817/pexels-photo-13055817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/13055817/pexels-photo-13055817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar