import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';

function Post() {
  return (
    <div>
        <Card  sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title="Htet Lynn"
        subheader="September 27, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>

      </CardActions>
    </Card>
    </div>
  )
}

export default Post