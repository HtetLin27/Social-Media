import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {React,useState} from 'react';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackSharpIcon from '@mui/icons-material/VideoCameraBackSharp';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import BrokenImageSharpIcon from '@mui/icons-material/BrokenImageSharp';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

function Add() {
    const [open,setOpen] =useState(false)
  return (
    <>
    <Tooltip title="Add" onClick={(e)=>setOpen(true)}
     sx={{positon:"fixed",
     bottom:20,
     left:{xs:"calc(50% - 25px)", md: 30}}}>
     <Fab color="primary" aria-label="add">
        <AddIcon/>
     </Fab> 
    </Tooltip>
    <StyledModal
    open={open}
    onClose={(e)=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}> 
    <Typography variant='h6' color='gray' textAlign="center">Create Post</Typography>
    <UserBox>
        <Avatar
            src="https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            sx={{width:30, height:30}}
        />
        <Typography fontWeight={500} variant="span">
            Htet Lynn Ko
        </Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={3} mb={3}>
            <EmojiEmotionsIcon color='primary'/>
            <BrokenImageSharpIcon color='secondary'/>
            <VideoCameraBackSharpIcon color='success'/>
            <PersonAddAlt1SharpIcon color='error'/>
        </Stack>
        <ButtonGroup
         fullWidth
         variant="contained"
         aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRangeIcon/>
            </Button>
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add