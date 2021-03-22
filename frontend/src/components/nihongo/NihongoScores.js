import { TwitterShareButton } from 'react-share';
import {
  Label,
  Icon,
} from 'semantic-ui-react';


function NihongoScores({ score, streak, numAnswered, highestStreak }) {
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
      <Label size='large' color='black'>
          {score} Point{score > 0 && 's'} ({
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
      {streak >= 5 &&
        <TwitterShareButton url='http://yurikotamura.com/nihongo'
                            title={streakShareString()}
                            via='tamumu61' hashtags={['nihongo']}>
          <Icon style={{marginTop: '5px', marginLeft: '5px'}}
                name='twitter' link/>share my streak!
        </TwitterShareButton>}
    </>
  )
}

export default NihongoScores;