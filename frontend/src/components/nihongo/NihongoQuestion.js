import { useState } from 'react';
import {
  Segment,
  Button,
  Header,
  Icon,
} from 'semantic-ui-react';


function NihongoQuestion({ word, handleNextWord, handleResult }) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  function assessAnswer(userAnswer) {
    setAnswered(true);
    const isCorrect = word.correct.includes(userAnswer.option);

    setCorrect(isCorrect);
    handleResult(isCorrect, userAnswer.option, word);
    setTimeout(() => {
      handleNextWord(isCorrect);
      setAnswered(false);
    }, 3000);
  }

  return (
    <Segment padded='very'>
      <p>Choose the reading that makes the most sense as a standalone word.</p>
      <Header style={{fontSize: '50px'}} color='violet'>{word.word}</Header>

      {word.all_options.map((option) => (
        <Button key={option}
                size='medium'
                disabled={answered}
                style={{margin: '5px'}}
                onClick={() => assessAnswer({option})}>{option}</Button>
      ))}

      {answered && correct &&
        <Header as='h3' color='green'>
          You got it! {word.note}
          <Icon loading name='hourglass outline'/>
        </Header>
      }
      {answered && !correct &&
        <Header as='h3' color='red'>
          Oops, it was {word.correct.join(' or ')}. {word.note}
          <Icon loading name='hourglass outline'/>
        </Header>
      }
    </Segment>
  )
}

export default NihongoQuestion;