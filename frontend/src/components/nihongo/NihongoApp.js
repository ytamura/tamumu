import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Message,
  Loader,
  Label,
} from 'semantic-ui-react';

import NihongoQuestion from './NihongoQuestion'
import { endpoint } from '../../utils';


function NihongoApp() {
  const [words, setWords] = useState({});
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

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

  function addPoint() {
    if (addPoint) {
      setScore(score + 1);
    }
  }

  function handleNextWord(setAnswered) {
    setTimeout(() => {
      if (currentWordIndex + 1 >= words.length) {
        setLoading(true);
        retrieveWords();
      } else {
        setCurrentWordIndex(currentWordIndex + 1);
      }
      setAnswered(false);
    }, 2000);
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Nihongo</Header>
      {error && <Message negative>{error}</Message>}
      <p>Counting in Japanese!</p>
      <Label size='medium'>{score} Points</Label>

      {loading ? <Loader active /> :
        <NihongoQuestion word={words[currentWordIndex]}
                         handleNextWord={handleNextWord}
                         addPoint={addPoint}/>
      }
    </Container>
  )
}

export default NihongoApp;