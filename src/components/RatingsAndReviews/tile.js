import React from 'react';
import {useState} from 'react';
import Rating from '@mui/material/Rating';
import ReviewBody from './reviewBody.js';
import ImageThumbnail from './imageThumbnails.js';
import List from '@mui/material/List';
import RatingHelpfulness from './ratingHelpfulness.js';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Tile(props) {
  let date = new Date(props.review.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
  const [reported, setReported] = useState(false);

  return(
    <React.Fragment>
      {reported ? <p className="reported">This review has been reported!</p> :
        <Grid container>
        <Grid item xs={2}>
        <Rating size="small" value={props.review.rating} sx={{color:'purple'}} readOnly/>
        </Grid>
        <Grid item xs={5}/>
        <Grid item xs={5} align="right">
        <p className="timestamp">{props.review.reviewer_name}, {date}</p>
        </Grid>
        <Grid item xs={12}>
          <strong className="reviewSummary">{props.review.summary}</strong>
        </Grid>
        <Grid item xs={12}>
          <ReviewBody text={props.review.body}/>
          </Grid>
        {props.review.recommend ? <React.Fragment><p className="reviewBody">I recommend this product!</p><CheckCircleOutlineIcon className="recIcon"/></React.Fragment>:<React.Fragment/>}
        <Grid item xs={12}>
          {props.review.photos.length > 0 ? <div>
            <List style={{display:'flex', flexDirection: 'row', padding:0}}>
              {props.review.photos.map((image) => {
                return (
                  <ImageThumbnail image={image} key={image.id}/>
                )
              })}
            </List></div>: <div></div>
          }
        </Grid>
        <Grid item xs={12}>
          <RatingHelpfulness setReported={setReported} review={props.review}/>
        </Grid>
        <Grid item xs={12}>
          {(props.review.response === null) ?<div></div> : <p>{props.review.response}</p> }
        </Grid>
      </Grid>
    }
    </React.Fragment>
  )
}


