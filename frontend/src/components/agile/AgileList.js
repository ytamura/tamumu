import {
  Icon,
  Table,
  Popup,
  Label,
} from 'semantic-ui-react';

import AgileEdit from './AgileEdit';
import { statusMap } from './AgileConstants';


function AgileList({ games, admin, handleEditClick, handleEditSubmit,
                     handleDelete }) {
  function getLastUpdatedDate(game) {
    return game[("last_updated" in game) ? "last_updated" : "_id"];
  }

  function getSortedKeys() {
    return Object.keys(games).sort((k1, k2) => {
      return getLastUpdatedDate(games[k2]) - getLastUpdatedDate(games[k1]);
    });
  }

  function displayDate(game) {
    const updated = ("last_updated" in game)
    const dateObject = new Date(getLastUpdatedDate(game));
    return (updated ? "updated " : "added ")
      + dateObject.toLocaleString("en-US", {year: "numeric",
                                            month: "numeric"});
  }

  return (
    <div>
      <Table selectable>
        <Table.Body>
          {getSortedKeys().map((game_key) => {
            const _game = games[game_key];

            return (
              <>
              <Table.Row key={game_key} active={_game.edit ? true : false}>
                <Table.Cell>
                  <Popup trigger={
                    <Icon name={statusMap[_game.status].icon}
                          color={statusMap[_game.status].color}/>}
                         content={_game.status}
                         position='left center'
                         inverted
                  /><Label horizontal>{displayDate(_game)}</Label>
                  {_game.name}
                </Table.Cell>

                <Table.Cell collapsing>
                  {_game.players.sort().join(', ')}
                </Table.Cell>

                {admin &&
                  <Table.Cell collapsing>
                    {_game.edit ?
                      <Icon name='edit' link
                            onClick={() => handleEditClick(game_key)}/> :
                      <Icon name='edit outline' link
                            onClick={() => handleEditClick(game_key)}/>}
                  </Table.Cell>
                }
              </Table.Row>

              {admin && _game.edit &&
                <Table.Row key={game_key + 'edit'}>
                 <Table.Cell colSpan={3}>
                  <AgileEdit game={_game} handleEditSubmit={handleEditSubmit}
                             handleDelete={handleDelete} />
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