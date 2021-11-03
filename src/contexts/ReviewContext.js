import React, {useContext, useState} from 'react';

const ReviewContext = React.createContext();

export function useReview() {
  return useContext(ReviewContext);
}

export function ReviewProvider({children}) {
  const [sort, setSort] = useState('relevant');
  const [quantity, setQuantity] = useState(2);


  function setNewSort(sortOn) {
    setSort(sortOn);
  }

  function setNewQuantity(num) {
    setQuantity(num);
  }

  return (
    <ReviewContext.Provider value = { {sort: sort, setNewSort:setNewSort, quantity: quantity, setNewQuantity: setNewQuantity }}>
      {children}
    </ReviewContext.Provider>
  )
}