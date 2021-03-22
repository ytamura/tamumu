import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Message,
  Loader,
  Label,
  Icon,
} from 'semantic-ui-react';

import NihongoQuestion from './NihongoQuestion';
import NihongoHistory from './NihongoHistory';
import NihongoScores from './NihongoScores';
import { endpoint } from '../../utils';


function NihongoApp() {
  const [words, setWords] = useState({});
  const [score, setScore] = useState(0);
  const [numAnswered, setNumAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [inStreak, setInStreak] = useState(false);
  const [highestStreak, setHighestStreak] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    retrieveWords();
  }, []);

  function retrieveWords() {
    axios.get(endpoint + 'api/nihongo/words').then(response => {
      console.log("Loaded words");
      if (response.status === 200) {
        setWords(response.data);
        setCurrentWordIndex(0);
        setError('');
      } else {
        setError('Error retrieving words: ' + response.data.toString())
      }
      setLoading(false);
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
      setLoading(false);
    });
  }

  function handleResult(isCorrect, userAnswer, word) {
    if (isCorrect) {
      setScore(score + 1);
      if (!inStreak) {
        setInStreak(true);
      }
      if (streak + 1 > highestStreak) {
        setHighestStreak(streak + 1);
      }
      setStreak(streak + 1);
    } else {
      setInStreak(false);
      setStreak(0);
    }
    if (history.length >= 10) {
      history.pop();
    }
    history.unshift({num: numAnswered + 1, word: word,
                     isCorrect: isCorrect, userAnswer: userAnswer})
    setHistory(history);
    setNumAnswered(numAnswered + 1);
  }

  function handleNextWord() {
    if (currentWordIndex + 1 >= words.length) {
      setLoading(true);
      retrieveWords();
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Nihongo</Header>
      {error && <Message negative>{error}</Message>}
      <p>Counting in Japanese!</p>
      <br />
      <NihongoScores score={score} streak={streak} numAnswered={numAnswered}
                     highestStreak={highestStreak}/>

      {loading ? <Loader active /> :
        <NihongoQuestion word={words[currentWordIndex]}
                         handleNextWord={handleNextWord}
                         handleResult={handleResult}
                         numAnswered={numAnswered}/>
      }
      {numAnswered > 0 &&
        <NihongoHistory history={history} numAnswered={numAnswered} />}
    </Container>
  )
}

export default NihongoApp;