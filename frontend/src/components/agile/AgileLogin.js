import { useState } from 'react';
import {
  Button,
  Modal,
  Form,
  Icon,
  Input,
} from 'semantic-ui-react';


function AgileLogin({ admin, setAdmin, handleLogin }) {
  const [open, setOpen] = useState(false);
  const [draftPassword, setDraftPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  function handlePasswordChange(event) {
    setDraftPassword(event.target.value);
    setPasswordError(false);
  }

  function handlePasswordResult(success) {
    if (success) {
        setAdmin(true);
        setDraftPassword('');
        setOpen(false);
    } else {
        setDraftPassword('');
        setPasswordError(true);
    }
  }

  return (
    <>
      {admin ?
        <Icon name='unlock' link onClick={() => setAdmin(false)} /> :
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='mini'
          trigger={<Icon name='lock' link />}
        >
          <Modal.Header>Secret phrase, please:</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field
              error={passwordError}
              control={Input}
              value={draftPassword}
              width={12}
              type='password'
              maxLength={40}
              onChange={handlePasswordChange}
            />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              content="OK"
              icon='checkmark'
              onClick={() => handleLogin(draftPassword, handlePasswordResult)}
              positive
              type='submit'
            />
          </Modal.Actions>
        </Modal>
      }
    </>
  )
}

export default AgileLogin