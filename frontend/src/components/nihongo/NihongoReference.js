import {
  Header,
  Table,
  Menu,
  Icon,
} from 'semantic-ui-react';
import { counters, trickQuestion } from './NihongoConstants';


function NihongoReference({ words }) {
  return (
    <>
      <Header as='h2' id='counters-title'>Counters</Header>
      <p>Some of the more common and tricky counters are featured in this app.
      More will be added over time...</p>

      <Menu fluid widths={counters.length}>
        {counters.map(counter => (
          <Menu.Item
            name={counter.counter[0]}
            href={'#' + counter.counter}
          />
        ))}
      </Menu>

      {counters.map((counter) => (
        <>
          <br id={counter.counter} />
          <Header as='h3'>
            <a href='#counters-title'>
              <Icon name='angle double up' color='violet' link />
            </a>
            ◯{counter.counter}
          </Header>
          <p>{counter.note}</p>
          <Table>
          {words.filter((word) =>
            word.word.includes(counter.filter) &&
            !word.word.startsWith(counter.filter)
           ).map(word => (
            <Table.Row key={word.word}>
              <Table.Cell collapsing>
                {word.correct.includes(trickQuestion) ?
                  <Header as='h3'><strike>{word.word}</strike></Header> :
                  <Header color='violet' as='h3'>{word.word}</Header>
                }
              </Table.Cell>
              <Table.Cell collapsing>
                {word.correct.includes(trickQuestion) ?
                  'Not real!' : word.correct.join(', ')}
              </Table.Cell>
              <Table.Cell>{word.note}</Table.Cell>
            </Table.Row>
          ))}
          </Table>
        </>
      ))}
    </>
  )
}

export default NihongoReference;