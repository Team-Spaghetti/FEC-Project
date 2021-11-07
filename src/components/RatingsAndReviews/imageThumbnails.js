import React from 'react';
import {useState} from 'react';
import Modal from '@mui/material/Modal';
import ListItem from '@mui/material/ListItem';

export default function ImageThumbnail(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
    <ListItem key={props.image.id}>
        <img src={props.image.url} width="50" height="50" onClick={handleOpen}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-description"
        >
          <img id="modal-description" src={props.image.url}/>
        </Modal>
    </ListItem>
    </div>

  )
}