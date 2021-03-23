import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import {
  Container,
  Header,
  Message,
  Loader,
  Menu,
} from 'semantic-ui-react';

import NihongoHistory from './NihongoHistory';
import NihongoQuestion from './NihongoQuestion';
import NihongoReference from './NihongoReference';
import NihongoScores from './NihongoScores';
import { endpoint } from '../../utils';


function NihongoApp({ view }) {
  const [activeItem, setActiveItem] = useState(view);
  const [words, setWords] = useState({});
  const [sortedWords, setSortedWords] = useState({});
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
      if (response.status === 200) {
        setSortedWords(response.data);
        let wordsToShuffle = [...response.data];
        setWords(wordsToShuffle.sort((a, b) => 0.5 - Math.random()));
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

  function handleTabClick(tab) {
    setActiveItem(tab);
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Nihongo 1 2 3</Header>
      {error && <Message negative>{error}</Message>}
      <br />

      <Menu tabular>
        {['Game', 'Leaderboard', 'Reference'].map(tab => (
          <Menu.Item key={tab}
            name={tab}
            active={activeItem === tab.toLowerCase()}
            onClick={() => handleTabClick(tab.toLowerCase())}
            as={Link} to={'/nihongo/' + tab.toLowerCase()}
          />
        ))}
      </Menu>

      {activeItem === 'game' &&
      <>
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
      </>}

      {activeItem === 'reference' &&
        (loading ? <Loader active /> :
                   <NihongoReference words={sortedWords} />)
      }

      {activeItem === 'leaderboard' && <Header as='h2'>Come back soon!</Header>}
      <br />
    </Container>
  )
}

export default NihongoApp;