import { useState } from 'react';
import {
  Segment,
  Button,
  Header,
  Icon,
  Label,
} from 'semantic-ui-react';


function NihongoQuestion({ word, handleNextWord, handleResult,
                           numAnswered }) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function assessAnswer(userAnswer) {
    setAnswered(true);
    setSelectedAnswer(userAnswer);
    const isCorrect = word.correct.includes(userAnswer);

    setCorrect(isCorrect);
    handleResult(isCorrect, userAnswer, word);
    const timeout = isCorrect ? 1100 : 5000
    setTimeout(() => {
      handleNextWord(isCorrect);
      setAnswered(false);
    }, timeout);
  }

  function getButtonColor(thisAnswer) {
    if (answered && selectedAnswer === thisAnswer) {
      return correct ? 'green' : 'red'
    } else if (answered && word.correct.includes(thisAnswer)) {
      return 'green'
    }
    return ''
  }

  return (
    <Segment>
      {answered && correct &&
        <Label color='green' ribbon='right'>
          <Icon name='star outline' loading /> You got it!
        </Label>
      }
      {answered && !correct &&
        <Label color='red' ribbon='right'>
          <Icon name='hourglass outline' loading /> Oops!
        </Label>
      }
      {!answered &&
        <Label ribbon='right' hidden>
          Question {numAnswered + 1}
        </Label>
      }

      <Segment basic style={{marginTop: '-20px',
                             marginLeft: '20px',
                             marginRight: '20px'}}>
      <span>Choose the reading that makes the most sense as a standalone word.</span>
      <Header style={{fontSize: '50px', marginLeft: '0px'}}
              color='violet'>{word.word}</Header>

      {word.all_options.map((option) => (
        <Button key={option}
                size='big'
                active={false}
                disabled={answered}
                color={getButtonColor(option)}
                style={{marginRight: '10px', marginBottom: '10px'}}
                onClick={() => assessAnswer(option)}>{option}</Button>
      ))}

      </Segment>
    </Segment>
  )
}

export default NihongoQuestion;