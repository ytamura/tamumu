import {
  Icon,
  Table,
} from 'semantic-ui-react'

function AgileList({ games }) {
  const icon_map = {'NOT_STARTED': 'exclamation circle',
                     'IN_PROGRESS': 'game',
                     'COMPLETED': 'check circle',}

  return (
    <div>
      <Table>
        <Table.Body>
          {games.map(game =>
            <Table.Row key={game._id}>
              <Table.Cell><Icon name={icon_map[game.status]} /> {game.name}</Table.Cell>
              <Table.Cell collapsing>{game.players.sort().join(', ')}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
  )
}

export default AgileList;