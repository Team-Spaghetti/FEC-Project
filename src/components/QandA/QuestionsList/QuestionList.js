import React, { useEffect, useState } from 'react';
import Question from './Question';
import MoreAnsweredQuestion from '../MoreAnsweredQuestions/MoreAnsweredQuestions';
import Search from '../Search/Search';
import AddQuestion from '../AddQuestion/AddQuestion';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

const styles = {
  '& .MuiList-root, & .MuiListItem-root': {
    paddingTop: '2px',
    paddingBottom: '2px',
    width: '100%',
    paddingRight: '2px',
    paddingLeft: '2px'
  },
}

var QuestionList = ({questions}) => {
  var [selected, chooseQuestions] = useState([]);
  var [text, setText] = useState('');
  var [display, setDisplay] = useState('More Answered Questions')

  var loadQuestions = (display) => {
    display === 'More Answered Questions' ? chooseQuestions(questions) : chooseQuestions(questions.slice(0, 4));
  }

  var handleSearch = freshText => {
    if (text.length < 3) {
      chooseQuestions(questions.slice(0, 4));
      setDisplay('More Answered Questions')
    } else chooseQuestions(questions.filter(question => {
      let questionBody = question.question_body.toLowerCase();
      let newText = freshText.toLowerCase();
      return questionBody.includes(newText);
    }))
  };

  useEffect(() => {chooseQuestions(questions.slice(0,4))}, [questions]);

  return(
    <Stack direction="column" spacing={1} sx={styles}>
      <Search handleSearch={handleSearch} setText={setText}/>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          overflow: 'auto',
          maxHeight: 850,
        }}
      >
        {selected.map(question => <ListItem key={question.question_id}><Question question={question} /></ListItem>)}
      </List>
      <Stack direction="row" spacing={2}>
        <MoreAnsweredQuestion numQuestions={questions.length} loadQuestions={loadQuestions} display={display} setDisplay={setDisplay} />
        <AddQuestion />
      </Stack>
    </Stack>
  )
}

export default QuestionList;

// to handle search as user types, i'll put the handle search method inside the onchange listener
// when the search string length is greater than 3, handlesearch will search for questions matching, until then, the displayed questions will be same as selected

// the main pool of question to be displayed will depend on 3 factors
//

// setting up possibility of different state for search questions
//

