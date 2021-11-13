import React from 'react';
import Rating from '@mui/material/Rating';
import ReviewBody from './reviewBody.js';
import ImageThumbnail from './imageThumbnails.js';
import List from '@mui/material/List';
import RatingHelpfulness from './ratingHelpfulness.js'

export default function Tile(props) {
  let date = new Date(props.review.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
  return(
    <div>
      <h3>{props.review.summary}</h3>
      <Rating value={props.review.rating} sx={{color:'black'}} readOnly/>
      <p>{props.review.reviewer_name}, {date}</p>
      <ReviewBody text={props.review.body}/>
      {props.review.photos.length > 0 ? <div>
        <List style={{display:'flex', flexDirection: 'row', padding:0}}>
          {props.review.photos.map((image) => {
            return (
              <ImageThumbnail image={image} key={image.id}/>
            )
          })}
        </List></div>: <div></div>
      }
      <RatingHelpfulness review={props.review}/>
      {(props.review.response === null) ?<div></div> : <p>{props.review.response}</p> }


    </div>
  )
}


{/* <ImageList>{props.review.photos.map((image) => {<ImageListItem key={image.key}><img src={image.url}/></ImageListItem>})}</ImageList>: <div></div>} */}