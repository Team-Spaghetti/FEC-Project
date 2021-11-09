import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

var style = {
  borderRadius: 10,
  bgcolor: 'background.paper',
  position: 'fixed',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  p: 4,
  transform: 'translate(-50%, -50%)',
  width: '45%',
  height: '55%',
  border: '2px solid #FFFFFF',
  boxShadow: 24,
  alignItems:"center",
  '& .MuiTextField-root': { m: 1, width: '65ch' },
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
          <Box component="form" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ask your Question about <em>Camo Onesie</em>
          </Typography>
          <div><TextField fullWidth id="fullWidth" label="Your Nickname" variant="outlined" color="secondary" helperText="*For authentication purposes; you will not be emailed"/>
          </div>
          <div><TextField fullWidth
            id="fullWidth"
            label="Your Question"
            multiline
            rows={4}
            variant="outlined" color="secondary"
          /></div>
          <div>
            <TextField fullWidth id="fullWidth" label="Your Nickname" color="secondary" variant="outlined" helperText="*For authentication purposes; you will not be emailed"/>
          </div>
            <Stack spacing={2}>
            <Button variant="contained" color="secondary" size="small" sx={{ bgcolor: '#BF40BF', justifyContent: 'center' }}>Submit your Question</Button>
            </Stack>
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

