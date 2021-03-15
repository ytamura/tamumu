import {
  Segment,
  Header,
  Message,
} from 'semantic-ui-react';


function NihongoHistory({ history, numAnswered }) {
  return (
    <Segment basic padded='very'>
      <Header>Your History</Header>
      {history.map(result => (
        <div>
          <h4>
            [{result.num}] {result.word.word}:
            &nbsp;
            {result.isCorrect ?
              <span style={{color: 'green'}}>
                {result.userAnswer} is correct!
              </span> :
              <span style={{color: 'red'}}>
                {result.userAnswer} is not right. The answer was {result.word.correct.join('/')}!
              </span>
            }
            <span style={{color: 'grey'}}>&nbsp;{result.word.note}</span>
          </h4>
        </div>
      ))}
      {numAnswered > 10 && <div>...</div>}
    </Segment>
  )
}

export default NihongoHistory;