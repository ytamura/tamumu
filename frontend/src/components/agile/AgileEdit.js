import {
  Form,
  Select,
  Input,
  Checkbox,
} from 'semantic-ui-react';

import { status_map, all_players } from './AgileConstants';


function AgileEdit({ game }) {
  const status_options = Object.keys(status_map).map(status => (
    {key: status,
     text: status,
     value: status}))

  return (
    <Form>
      <Form.Group>
        <Form.Field
          control={Select}
          compact
          label='Status'
          options={status_options}
          placeholder={game.status}
        />
        <Form.Field
          control={Input}
          label='Game'
          placeholder={game.name}
          width={10}
        />
        <Form.Group grouped>
          <label>Player(s)</label>
          {all_players.map((player) => (
            <Form.Field
              key={player}
              control={Checkbox}
              label={player}
              checked={game.players.includes(player)}
            />
          ))}
        </Form.Group>
      </Form.Group>
    </Form>
  )
}

export default AgileEdit;