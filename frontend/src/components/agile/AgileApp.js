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
import AgileLogin from './AgileLogin';
import { statusGroups } from './AgileConstants';
import { endpoint, filterObject } from '../../utils';

function AgileApp() {
  const [games, setGames] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [admin, setAdmin] = useState(false);

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

  function handleLogin(password, handlePasswordResult) {
    axios.post(endpoint + 'api/agile/login',
               { 'password': password }).then(response => {
      console.log(response.data);
      handlePasswordResult(response.data);
    }).catch(error => {
      console.log(error);
      return(false);
    })
  }

  function handleDelete(gameId) {
    let _games = {...games};
    delete _games[gameId];
    setGames(_games);
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
            <AgileLogin admin={admin} handleLogin={handleLogin}
                        setAdmin={setAdmin}/>
          </Grid.Column>
        </Grid.Row>
        {showAddForm &&
          <Grid.Row columns={1}>
            <Grid.Column>
              <AgileEdit game={{}} handleEditSubmit={handleEditSubmit}
                         handleDelete={null}/>
            </Grid.Column>
          </Grid.Row>}
      </Grid>

      {statusGroups.map(group =>
        <>
        <Header as='h3'>{group.heading}</Header>
        <AgileList games={filterObject(games, 'status', group.statuses)}
                   admin={admin}
                   handleEditClick={handleEditClick}
                   handleEditSubmit={handleEditSubmit}
                   handleDelete={handleDelete}/>
        </>
      )}
      {Object.keys(games).length === 0 &&
        <Header as='h3'><i>Oh no! Nothing in the queue!</i></Header>
      }
    </Container>
  );
}

export default AgileApp;
