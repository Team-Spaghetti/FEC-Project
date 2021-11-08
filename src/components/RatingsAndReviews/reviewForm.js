import React from 'react';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ImageThumbnail from './imageThumbnails.js';
import CharacteristicForm from './characteristicForm.js';

// const initialValues =  {
//   rating: 0,
//   images: [],
//   recommend: null,
//   reviewSummary: '',
//   reviewBody: '',
//   username: '',
//   email: '',
//   characteristics: {},
// }


export default function ReviewForm(props) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState();
  const [upload, setUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);
  const [recommend, setRecommend] = useState();
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  // const [characteristicValue, setCharacteristicValue] = useState([])
  const labels = {1:'Poor', 2:'Fair', 3:'Average', 4:'Good', 5:'Great'};
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpload = () => setUpload(true);
  const handleCloseUpload = () => setUpload(false);
  const handleUrlInput = (event) => setImageUrl(event.target.value);
  const handleRecommended = (event) => setRecommend(event.target.value);
  const handleReviewSummary = (event) => setReviewSummary(event.target.value);
  const handleReviewBody = (event) => setReviewBody(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const addImage = () => {
    setImages([...images, imageUrl]);
    setImageUrl('');
    setUpload(false);
  };
  const validate = () => {
    let temp = {};
    temp.rating = rating ? '' : 'Rating is required.';
    temp.recommend = recommend ? '' : 'Recommend is required.';
    temp.reviewBody = reviewBody ? '' : 'Review body is required.';
    temp.username = username ? '' : 'username is required.';
    setErrors({...temp});
  };
  // const characteristics = Object.keys(props.characteristics);
  // const characteristicDescriptions = {
  //   Size: ['A size is too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
  //   Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  //   Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  //   Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  //   Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  //   Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}
  return (
    <div>
      <button onClick={handleOpen}>Add Review</button>
      <Dialog open={open} maxWidth="md" onClose={handleClose}>
        <form>
          <Grid container>
            <Grid container>
              <Grid item>
                <Rating sx={{color:'black'}} onChange={(event, newValue) => setRating(newValue)} required/>
              </Grid>
              <Grid item>
                <p>{labels[rating] || ''}</p>
              </Grid>
            </Grid>
            <FormControl>
              <FormLabel component="legend">Do you recommend this product?</FormLabel>
              <RadioGroup aria-label="recommend" required onChange={handleRecommended} value={recommend}>
                <FormControlLabel value={true} control={<Radio/>} label="Yes"/>
                <FormControlLabel value={false} control={<Radio/>} label="No"/>
              </RadioGroup>
            </FormControl>
              {/* {characteristics.map((characteristic) => {
                var tempId = props.characteristics[characteristic].id;
                setCharacteristicValue({...characteristicValue, ...{tempId: null}})
                return (
                  <CharacteristicForm characteristic={characteristic} descriptions={characteristicDescriptions} charValues={characteristicValue} setCharValues={setCharacteristicValue} id={props.characteristics[characteristic].id}/>
                )
              })} */}
            <TextField label="Review Summary" defaultValue="Example: Best purchase ever!" inputProps={{maxLength:'60ch'}} onChange={handleReviewSummary} value={reviewSummary}/>
            <TextField label="Review body" size='large' inputProps={{maxLength: '1000ch', minLength: '50ch' }} required onChange={handleReviewBody} value={reviewBody}/>
            <button onClick={handleUpload}>Upload Photos</button>
            <Dialog open={upload} onClose={handleCloseUpload}>
                <TextField label="Image URL" defaultValue="Input your image url here." onChange={handleUrlInput} />
                {(images.length<5) ? <button onClick={addImage}>Add Image</button> : <div></div>}
            </Dialog>
            {images.length > 0 ? <div>
                    <List style={{display:'flex', flexDirection: 'row', padding:0}}>
                      {images.map((image) => {
                        return (
                          <img key={image} src={image} width="50" height="50"/>
                        )
                      })}
                    </List>
                  </div> : <div></div>}
            <TextField label="What is your nickname?" defaultValue="Example : jackson11!" inputProps={{maxLength:'60ch'}} required onChange={handleUsername} value={username}/>
            <TextField label="Email" defaultValue="Example : jackson11@email.com" inputProps={{maxLength:'60ch'}} required onChange={handleEmail} value={email}/>
            <button>Submit Review</button>
          </Grid>
        </form>
      </Dialog>
    </div>
  )
}