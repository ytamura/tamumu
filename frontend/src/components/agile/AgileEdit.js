import { useState } from 'react';
import {
  Form,
  Select,
  Input,
  Checkbox,
  Button,
} from 'semantic-ui-react';

import { statusMap, allPlayers } from './AgileConstants';


function AgileEdit({ game, handleEditSubmit, handleDelete }) {
  const isNew = handleDelete === null;
  const gameId = isNew ? new Date().getTime() : game._id;
  const statusList = Object.keys(statusMap);

  const [draftStatus, setDraftStatus] =
    useState(isNew ? statusList[0] : game.status);
  const [draftName, setDraftName] = useState(isNew ? '' : game.name);
  const [draftPlayers, setDraftPlayers] = useState(isNew ? [] : game.players);
  const [nameError, setNameError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [playersError, setPlayersError] = useState(false);

  const statusOptions = statusList.map(status => (
    {key: status,
     text: status,
     value: status}))

  function handleStatusChange(event, { value }) {
    setDraftStatus(value);
    setStatusError(false);
  }

  function handleNameChange(event) {
    const value = event.target.value;
    setDraftName(value);
    setNameError(value.length === 0);
  }

  function handlePlayersChange(event, { value, checked }) {
    if (checked && !draftPlayers.includes(value)) {
      setDraftPlayers([...draftPlayers, value]);
    } else if (!checked && draftPlayers.includes(value)) {
      setDraftPlayers(draftPlayers.filter(item => item !== value));
    }
    setPlayersError(false);
  }

  function handleSubmitClicked(event) {
    let pass = true;
    if (draftName.length === 0) {
      setNameError(true);
      pass = false;
    }
    if (draftPlayers.length === 0) {
      setPlayersError(true);
      pass = false;
    }
    if (!statusList.includes(draftStatus)) {
      setStatusError(true);
      pass = false;
    }
    if (pass) {
      handleEditSubmit({_id: gameId,
                        name: draftName,
                        status: draftStatus,
                        players: draftPlayers});
    }
  }

  return (
    <Form onSubmit={handleSubmitClicked}>
      <Form.Group>
        <Form.Field
          control={Select}
          width={4} compact
          label='Status'
          options={statusOptions}
          value={draftStatus}
          onChange={handleStatusChange}
          error={statusError}
        />
        <Form.Field
          control={Input}
          label='Game'
          value={draftName}
          width={10}
          maxLength={57}
          onChange={handleNameChange}
          error={nameError && {
            content: 'Please enter a valid game title',
            pointing: 'above',
          }}
        />
        <Form.Group grouped>
          <label>Player(s)</label>
          {allPlayers.map((player) => (
            <Form.Field
              key={player}
              control={Checkbox}
              label={player}
              value={player}
              checked={draftPlayers.includes(player)}
              onChange={handlePlayersChange}
              error={playersError}
            />
          ))}
        </Form.Group>
      </Form.Group>

      <Button type='submit' floated='right' positive>Save</Button>
      {!isNew && 
        <>
          <Button type='button' icon='trash'
                  onClick={() => handleDelete(gameId)} />
          <Button type='button' icon='triangle up' floated='right' />
          <Button type='button' icon='triangle down' floated='right' />
        </>}
    </Form>
  )
}

export default AgileEdit;