import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Header
} from 'semantic-ui-react'

import AgileList from './AgileList'
import { endpoint } from '../../utils'

function AgileApp({ admin }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(endpoint + 'api/agile/games').then(response => {
      console.log("Loaded games");
      setGames(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Agile</Header>
      <p>Here's what we're playing:</p>
      <AgileList games={games} admin={admin}/>
    </Container>
  );
}

export default AgileApp;
