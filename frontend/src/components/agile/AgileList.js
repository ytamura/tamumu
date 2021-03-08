import {
  Icon,
  Table,
} from 'semantic-ui-react';

import AgileEdit from './AgileEdit';
import { status_map } from './AgileConstants';


function AgileList({ games, admin, handleEditClick }) {
  return (
    <div>
      <Table selectable>
        <Table.Body>
          {Object.keys(games).map((game_key) =>
            <>
            <Table.Row key={game_key}>
              <Table.Cell>
                <Icon name={status_map[games[game_key].status].icon}
                      color={status_map[games[game_key].status].color}/> {games[game_key].name}
              </Table.Cell>

              <Table.Cell collapsing>
                {games[game_key].players.sort().join(', ')}
              </Table.Cell>

              {admin &&
                <Table.Cell collapsing>
                  {games[game_key].edit ? <Icon name='edit' onClick={() => handleEditClick(game_key)}/> :
                                          <Icon name='edit outline' onClick={() => handleEditClick(game_key)}/>}
                </Table.Cell>
              }
            </Table.Row>
            {admin && games[game_key].edit &&
              <Table.Row key={game_key + 'edit'}>
               <Table.Cell>
                <AgileEdit game={games[game_key]} />
               </Table.Cell> 
              </Table.Row>}
            </>)
          }
        </Table.Body>
      </Table>
    </div>
  )
}

export default AgileList;