import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Header
} from 'semantic-ui-react';

import AgileList from './AgileList'
import { endpoint } from '../../utils'

function AgileApp({ admin }) {
  const [games, setGames] = useState({});

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

  function handleEditClick(game_id) {
    setGames({
      ...games,
      [game_id] : {
         ...games[game_id],
         edit: !games[game_id].edit,
      }
    });
  }

  function handleEditSubmit(game_id, new_game) {
    setGames({
      ...games,
      [game_id] : {
         ...new_game,
         edit: false,
      }
    });
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Agile</Header>
      <p>Here's what we're playing:</p>
      <AgileList games={games} admin={admin}
                 handleEditClick={handleEditClick}/>
    </Container>
  );
}

export default AgileApp;
