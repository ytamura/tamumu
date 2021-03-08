import { useState } from 'react';
import {
  Form,
  Select,
  Input,
  Checkbox,
  Button,
} from 'semantic-ui-react';

import { statusMap, allPlayers } from './AgileConstants';


function AgileEdit({ game, handleEditSubmit, isNew }) {
  const [draftStatus, setDraftStatus] = useState(game.status);
  const [draftName, setDraftName] = useState(game.name);
  const [draftPlayers, setDraftPlayers] = useState(game.players);

  const statusOptions = Object.keys(statusMap).map(status => (
    {key: status,
     text: status,
     value: status}))

  function handleStatusChange(event, { value }) {
    setDraftStatus(value);
  }

  function handleNameChange(event) {
    setDraftName(event.target.value);
  }

  function handlePlayersChange(event, { value, checked }) {
    if (checked && !draftPlayers.includes(value)) {
      setDraftPlayers([...draftPlayers, value]);
    } else if (!checked && draftPlayers.includes(value)) {
      setDraftPlayers(draftPlayers.filter(item => item !== value));
    }
  }

  function handleSubmitClicked(event) {
    handleEditSubmit(game._id,
                     {_id: game._id,
                      name: draftName,
                      status: draftStatus,
                      players: draftPlayers});
  }

  return (
    <Form onSubmit={handleSubmitClicked}>
      <Form.Group>
        <Form.Field
          control={Select}
          compact
          label='Status'
          options={statusOptions}
          value={draftStatus}
          onChange={handleStatusChange}
        />
        <Form.Field
          control={Input}
          label='Game'
          value={draftName}
          width={10}
          onChange={handleNameChange}
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
            />
          ))}
        </Form.Group>
      </Form.Group>
      <Button type='button' icon='trash' />
      <Button type='submit' floated='right' positive>Save</Button>
      <Button type='button' icon='triangle up' floated='right' />
      <Button type='button' icon='triangle down' floated='right' />
    </Form>
  )
}

export default AgileEdit;