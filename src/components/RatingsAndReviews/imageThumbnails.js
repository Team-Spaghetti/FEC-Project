import React from 'react';
import {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';

export default function ImageThumbnail(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
  position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'PapayaWhip',
    border: '2px solid purple',
    // boxShadow: 24,
    p: 4,
  }
  return (
    <div>
    <ListItem key={props.image.id}>
        <img src={props.image.url} width="50" height="50" onClick={handleOpen}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-description"
          style={{alignItems:'center', justifyContent:'center'}}
        >
          <Box sx={style}>
            <img id="modal-description" src={props.image.url}/>
          </Box>
        </Modal>
    </ListItem>
    </div>
  )
}