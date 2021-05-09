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
  Segment,
} from 'semantic-ui-react';

import NihongoHistory from './NihongoHistory';
import NihongoLeaderboard from './NihongoLeaderboard';
import NihongoQuestion from './NihongoQuestion';
import NihongoReference from './NihongoReference';
import NihongoScores from './NihongoScores';
import { endpoint } from '../../utils';


function NihongoApp({ view }) {
  const [player, setPlayer] = useState('');
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
  const [leadersLoading, setLeadersLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    retrieveWords();
    retrieveLeaders();
  }, []);

  function retrieveWords() {
    axios.get(endpoint + 'api/nihongo/words').then(response => {
      if (response.status === 200) {
        setSortedWords(response.data);
        let wordsToShuffle = [...response.data];
        setWords(wordsToShuffle.sort((a, b) => 0.5 - Math.random()));
        setCurrentWordIndex(0);
      } else {
        setError(error + 'Error retrieving words: ' + response.data.toString()
                 + '\n');
      }
      setLoading(false);
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
      setLoading(false);
    });
  }

  function retrieveLeaders() {
    axios.get(endpoint + 'api/nihongo/leaders').then(response => {
      if (response.status === 200) {
        setLeaders(response.data);
      } else {
        setError('Error retrieving leaders: ' + response.data.toString())
      }
      setLeadersLoading(false);
    }).catch(_error => {
      console.log(_error);
      if (error === '') {
        setError(_error.toString());
      }
      setLeadersLoading(false);
    });
  }

  function handleUpdateLeader(leader) {
    axios.post(endpoint + 'api/nihongo/update_leader',
               { ...leader }).then(response => {
      console.log(response.data);
      if (response.data === 'updated') {
        setLeaders({
          ...leaders,
          [leader._id] : { ...leader }
        });
        setError('');
      } else {
        setError('Error updating ' + leader.name + '\n' +
                 response.data.toString());
      }
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
    })
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
                       highestStreak={highestStreak} player={player}
                       setPlayer={setPlayer} />

        {(loading || Object.keys(words).length === 0) ?
         <Segment padded basic><Loader active /></Segment> :
         <NihongoQuestion word={words[currentWordIndex]}
                          handleNextWord={handleNextWord}
                          handleResult={handleResult}
                          numAnswered={numAnswered}/>
        }
        {numAnswered > 0 &&
          <NihongoHistory history={history} numAnswered={numAnswered} />}
      </>}

      {activeItem === 'reference' &&
        ((loading || Object.keys(words).length === 0) ?
         <Segment padded basic><Loader active /></Segment> :
         <NihongoReference words={sortedWords} />)
      }

      {activeItem === 'leaderboard' &&
        (leadersLoading ?
         <Segment padded basic><Loader active /></Segment> :
         <>
          <NihongoScores score={score} streak={streak} numAnswered={numAnswered}
                         highestStreak={highestStreak} player={player}
                         setPlayer={setPlayer} />
          <NihongoLeaderboard leaders={leaders} />
         </>)
      }
      <br />
    </Container>
  )
}

export default NihongoApp;
