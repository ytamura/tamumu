import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';

import AgileList from './AgileList';
import AgileEdit from './AgileEdit';
import { endpoint } from '../../utils';

function AgileApp({ admin }) {
  const [games, setGames] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    axios.get(endpoint + 'api/agile/games').then(response => {
      console.log("Loaded games");
      let _games = response.data;
      _games.map((game) => (game['edit'] = false));
      _games = _games.reduce((a, x) => ({...a, [x._id]: x}), {})
      setGames(_games);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  function handleEditClick(gameId) {
    setGames({
      ...games,
      [gameId] : {
         ...games[gameId],
         edit: !games[gameId].edit,
      }
    });
  }

  function handleEditSubmit(gameId, newGame) {
    if (!(gameId in games)) {
      setShowAddForm(false);
    }
    setGames({
      ...games,
      [gameId] : {
         ...newGame,
         edit: false,
      }
    });
  }

  function handleAddClick() {
    setShowAddForm(!showAddForm);
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Agile</Header>
      <Grid padded='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column><p>Here's what we're playing:</p></Grid.Column>
          <Grid.Column textAlign='right'>
            {admin && <Icon name={showAddForm ? 'remove circle' : 'add circle'}
                            size='large' link onClick={handleAddClick}/>}
          </Grid.Column>
        </Grid.Row>
        {showAddForm &&
          <Grid.Row columns={1}>
            <Grid.Column>
              <AgileEdit game={{}} handleEditSubmit={handleEditSubmit}
                         isNew={true}/>
            </Grid.Column>
          </Grid.Row>}
      </Grid>

      <AgileList games={games} admin={admin}
                 handleEditClick={handleEditClick}
                 handleEditSubmit={handleEditSubmit}/>
    </Container>
  );
}

export default AgileApp;
