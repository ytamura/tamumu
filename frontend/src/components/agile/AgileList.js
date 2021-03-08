import {
  Icon,
  Table,
} from 'semantic-ui-react';

import AgileEdit from './AgileEdit';
import { statusMap } from './AgileConstants';


function AgileList({ games, admin, handleEditClick, handleEditSubmit }) {
  return (
    <div>
      <Table selectable>
        <Table.Body>
          {Object.keys(games).map((game_key) => {
            const _game = games[game_key];

            return(
              <>
              <Table.Row key={game_key} active={_game.edit ? true : false}>
                <Table.Cell>
                  <Icon name={statusMap[_game.status].icon}
                        color={statusMap[_game.status].color}/> {_game.name}
                </Table.Cell>

                <Table.Cell collapsing>
                  {_game.players.sort().join(', ')}
                </Table.Cell>

                {admin &&
                  <Table.Cell collapsing>
                    {_game.edit ? <Icon name='edit' onClick={() => handleEditClick(game_key)}/> :
                                  <Icon name='edit outline' onClick={() => handleEditClick(game_key)}/>}
                  </Table.Cell>
                }
              </Table.Row>

              {admin && _game.edit &&
                <Table.Row key={game_key + 'edit'}>
                 <Table.Cell colSpan={3}>
                  <AgileEdit game={_game} handleEditSubmit={handleEditSubmit}
                             isNew={false}/>
                 </Table.Cell>
                </Table.Row>}
              </>)
            })
          }
        </Table.Body>
      </Table>
    </div>
  )
}

export default AgileList;