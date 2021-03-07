import {
  Icon,
  Table,
} from 'semantic-ui-react'

function AgileList({ games, admin }) {
  const icon_map = {'NOT_STARTED': 'exclamation circle',
                    'IN_PROGRESS': 'game',
                    'COMPLETED': 'check circle',}
  const color_map = {'NOT_STARTED': 'black',
                     'IN_PROGRESS': 'orange',
                     'COMPLETED': 'green',}

  return (
    <div>
      <Table selectable>
        <Table.Body>
          {games.map(game =>
            <Table.Row key={game._id}>
              <Table.Cell>
                <Icon name={icon_map[game.status]}
                      color={color_map[game.status]}/> {game.name}
              </Table.Cell>
              <Table.Cell collapsing>
                {game.players.sort().join(', ')}
              </Table.Cell>
              {admin &&
                <Table.Cell collapsing>
                  <Icon name='edit outline'/>
                </Table.Cell>
              }
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
  )
}

export default AgileList;