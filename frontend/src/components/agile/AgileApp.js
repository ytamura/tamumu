import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Header,
  Icon,
  Message,
  Menu,
  Loader,
  Segment,
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(endpoint + 'api/agile/games').then(response => {
      console.log("Loaded games");
      if (response.status === 200) {
        let _games = response.data;
        _games.map((game) => (game['edit'] = false));
        _games = _games.reduce((a, x) => ({...a, [x._id]: x}), {})
        setGames(_games);
        setError('');
      } else {
        setError('Error retrieving games: ' + response.data.toString())
      }
      setLoading(false);
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
      setLoading(false);
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

  function handleEditSubmit(game) {
    // New or Update
    axios.post(endpoint + 'api/agile/update_game',
               { ...game }).then(response => {
      console.log(response.data);
      if (response.data === 'updated') {
        setGames({
          ...games,
          [game._id] : {
             ...game,
             edit: false,
          }
        });
        setError('');
        if (!(game._id in games)) {
          setShowAddForm(false);
        }
      } else {
        setError('Error updating ' + game.name + '\n' +
                 response.data.toString());
      }
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
    })
  }

  function handleLogin(password, handlePasswordResult) {
    axios.post(endpoint + 'api/agile/login',
               { 'password': password }).then(response => {
      handlePasswordResult(response.data);
      setError('');
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
    })
  }

  function handleDelete(gameId) {
    axios.post(endpoint + 'api/agile/delete_game',
               {_id: gameId}).then(response => {
      console.log(response.data);
      if (response.data === 'deleted') {
        let _games = {...games};
        delete _games[gameId];
        setGames(_games);
        setError('');
      } else {
        setError('Error deleting ' + games[gameId].name + '\n' +
                 response.data.toString());
      }
    }).catch(_error => {
      console.log(_error);
      setError(_error.toString());
    })
  }

  function handleLock(toBeLocked) {
    setAdmin(!toBeLocked);
    setShowAddForm(false);
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Agile</Header>
      {error && <Message negative>{error}</Message>}
      <Grid padded='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column><p>Here's what we're playing:</p></Grid.Column>
          <Grid.Column textAlign='right'>
            {admin && <Icon name={showAddForm ? 'remove circle' : 'add circle'}
                            size='large' link
                            onClick={() => setShowAddForm(!showAddForm)}/>}
            <AgileLogin admin={admin} handleLogin={handleLogin}
                        handleLock={handleLock}/>
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

      <Menu fluid widths={statusGroups.length}>
        {statusGroups.map(group => (
          <Menu.Item
            name={group.heading}
            href={'#' + group.id}
          />
        ))}
      </Menu>

      {statusGroups.map(group =>
        <>
          <Header as='h3' id={group.id}>{group.heading}</Header>
          {loading ? <Segment padded><Loader active /></Segment> :
           <AgileList key={group.heading}
                      games={filterObject(games, 'status', group.statuses)}
                      admin={admin}
                      handleEditClick={handleEditClick}
                      handleEditSubmit={handleEditSubmit}
                      handleDelete={handleDelete}/>
          }
        </>
      )}
      {Object.keys(games).length === 0 && !loading &&
        <Header as='h3'><i>Oh no! Nothing in the queue!</i></Header>
      }
      <br/>
    </Container>
  );
}

export default AgileApp;
