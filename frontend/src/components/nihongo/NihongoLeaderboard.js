import { TwitterShareButton } from 'react-share';
import {
  Header,
  Table,
  Icon,
} from 'semantic-ui-react';


function NihongoLeaderboard({ leaders }) {
  return (
    <>
      <Header as='h2'>Top Streaks</Header>
      <Table>
        {leaders.map((leader) =>
          <Table.Row>
          </Table.Row>
        )}
      </Table>
      🚧 Under Construction 🚧
    </>
  )
}

export default NihongoLeaderboard;
