import { useState } from 'react';
import { TwitterShareButton } from 'react-share';
import {
  Label,
  Icon,
  Form,
  Input,
  Grid,
  Popup,
  Button,
} from 'semantic-ui-react';


function NihongoScores({ score, streak, numAnswered, highestStreak,
                         player, setPlayer }) {
  const [draftPlayer, setDraftPlayer] = useState('')
  const [playerInputOpen, setPlayerInputOpen] = useState(true);

  function handlePlayerChange(event) {
    setDraftPlayer(event.target.value);
    setPlayerInputOpen(true);
  }

  function handlePlayerSubmit() {
    setPlayer(draftPlayer);
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
            Best Streak: {highestStreak}
          </Label>
          {highestStreak >= 5 &&
            <TwitterShareButton url='http://yurikotamura.com/nihongo'
                                title={streakShareString()}
                                via='tamumu61' hashtags={['nihongo']}>
              <Icon style={{marginTop: '5px', marginLeft: '5px'}}
                    name='twitter' link/>share!
            </TwitterShareButton>}
        </Grid.Column>
        <Grid.Column textAlign='right' width={4}>
          {player ?
            <div style={{marginTop: '5px'}}><i>{player}</i></div> :
            highestStreak >= 5 &&
              <Popup trigger={
                <Form onSubmit={handlePlayerSubmit}>
                  <Form.Field
                    control={Input}
                    value={draftPlayer}
                    maxLength={15}
                    width={16}
                    onChange={handlePlayerChange}
                    placeholder='Player Name'
                  />
                </Form>}

                open={playerInputOpen}
                basic>
                <Button icon='close' size='mini'
                        floated='right' circular compact
                        onClick={() => setPlayerInputOpen(false)}/>
                {draftPlayer.length > 0 ?
                  'Press enter to submit' :
                  'Enter your name to participate in the leaderboard!'}
              </Popup>
          }
          </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default NihongoScores;