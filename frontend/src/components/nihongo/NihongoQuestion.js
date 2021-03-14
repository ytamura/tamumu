import { useState } from 'react';
import {
  Segment,
  Button,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react';


function NihongoQuestion({ word, handleNextWord, addPoint }) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  function assessAnswer(answer) {
    setAnswered(true);
    if (word.correct.includes(answer.option)) {
      setCorrect(true);
      addPoint();
      handleNextWord(setAnswered);
    } else {
      setCorrect(false);
      handleNextWord(setAnswered);
    }
  }

  return (
    <Segment padded='very'>
      <Header size='huge' color='violet'>{word.word}</Header>

      {word.all_options.map((option) => (
        <Button key={option}
                size='medium'
                disabled={answered}
                onClick={() => assessAnswer({option})}>{option}</Button>
      ))}

      {answered && correct &&
        <Header color='green'>
          You got it! {word.note}
          <Icon loading name='hourglass outline'/>
        </Header>
      }
      {answered && !correct &&
        <Header color='red'>
          Oops, it was {word.correct.join(' or ')}. {word.note}
          <Icon loading name='hourglass outline'/>
        </Header>
      }
    </Segment>
  )
}

export default NihongoQuestion;