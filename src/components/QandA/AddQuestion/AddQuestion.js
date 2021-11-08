import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: '100%',
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #FFFFFF',
  boxShadow: 24,
  p: 4,
  alignItems:"center",
  '& .MuiTextField-root': { m: 1, width: '72ch' },
  root: {
    justifyContent: 'center'
  }
};

var AddQuestion = () => {
  var [open, setOpen] = useState(false);
  var handleOpen = () => setOpen(true);
  var handleClose = () => setOpen(false);

  var handleClick = () => {
    // will execute logic for presenting modal form to user to fill up
  }
  return (
    <div className="aq">
      <button onClick={handleOpen}>Add A Question +</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ask your Question about (productname here)
          </Typography>
          <div><TextField fullWidth id="fullWidth" label="Your Nickname" variant="outlined" />
            <Typography id="modal-modal-description" component="h1">
              For privacy reasons, do not use your full name or email address
            </Typography>
          </div>
          <div><TextField fullWidth
            id="fullWidth"
            label="Your Question"
            multiline
            rows={4}
            variant="outlined"
          /></div>
          <div><TextField fullWidth id="fullWidth" label="Your Email" variant="outlined" />
            <Typography id="modal-modal-description" component="h1">
              For authentication reasons. You will not be emailed
            </Typography>
          </div>
          <Button variant="contained">Submit your Question</Button>
          </Box>
        </Modal>
    </div>
  )
 }

export default AddQuestion;

// Add question on click will present a modal
// the modal will be in the form of a form
// this form will be hidden from view
// then add question is clicked
// form will be revieald
// after form is revealed, clicking on anywhere else on the form won't make the form go away
// clicking on the x button will make the form go away
// clicking outside the form will make the form go away

// with material ui, i can setup
// the form in a box
// apply the necessary styles to the box
// get the submit button to communicate with the server


