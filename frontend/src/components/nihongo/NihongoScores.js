import { useState } from 'react';
import { TwitterShareButton } from 'react-share';
import {
  Label,
  Icon,
  Form,
  Input,
  Grid,
  Popup,
} from 'semantic-ui-react';


function NihongoScores({ score, streak, numAnswered, highestStreak }) {
  const [player, setPlayer] = useState('');
  const [playerSubmitted, setPlayerSubmitted] = useState(false);

  function handlePlayerChange(event) {
    setPlayer(event.target.value);
  }

  function handlePlayerSubmit() {
    setPlayerSubmitted(true);
  }

  function getFireColor() {
    if (streak >= 25) {
      return 'red';
    } else if (streak >= 20) {
      return 'orange';
    } else if (streak >= 15) {
      return 'yellow';
    } else if (streak >= 10) {
      return 'green';
    } else if (streak >= 5) {
      return 'blue';
    } else {
      return 'grey';
    }
  }

  function streakShareString() {
    return ('I got a ' + highestStreak +
            '-point streak 🔥 on this random nihongo counter quiz! ' +
            'Can you beat me?');
  }

  return (
    <>
      <Grid columns='equal'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Label size='large' color='black'>
              {score} Point{score !== 1 && 's'} ({
                numAnswered > 0 ? Math.round(100 * score/numAnswered) : 0}%)
          </Label>
          <Label size='large' color='black'>
          <Icon name={streak >= 25 ? 'heart' : 'fire'}
                color={getFireColor()}/>
            {streak} Point Streak
          </Label>
          <Label size='large' color='grey' style={{marginTop: '5px'}}>
            Highest Streak: {highestStreak}
          </Label>
          {highestStreak >= 5 &&
            <TwitterShareButton url='http://yurikotamura.com/nihongo'
                                title={streakShareString()}
                                via='tamumu61' hashtags={['nihongo']}>
              <Icon style={{marginTop: '5px', marginLeft: '5px'}}
                    name='twitter' link/>share streak!
            </TwitterShareButton>}
        </Grid.Column>
        <Grid.Column textAlign='right' width={4}>
          {playerSubmitted ?
            <div style={{marginTop: '5px'}}><i>{player}</i></div> :
            <Popup trigger={
              <Form onSubmit={handlePlayerSubmit}>
                <Form.Field
                  control={Input}
                  value={player}
                  maxLength={15}
                  width={16}
                  onChange={handlePlayerChange}
                  placeholder='Player Name'
                />
              </Form>}
              content='Enter your name to participate in the leaderboard!'
              basic />
          }
          </Grid.Column>
      </Grid.Row>
      </Grid>
    </>
  )
}

export default NihongoScores;