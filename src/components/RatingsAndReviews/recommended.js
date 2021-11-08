import React from 'react';

export default function Recommended(props) {
  const percent = (parseInt(props.recommend.true))/(parseInt(props.recommend.false) + parseInt(props.recommend.true)) * 100;
  return (
    <p>{Math.round(percent)}% of reviews recommend this product</p>
  )
}