import { useEffect, useState } from 'react';
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'
import PortalApp from './components/portal/PortalApp'
import AgileApp from './components/agile/AgileApp'


function App() {
  const [currentApp, setCurrentApp] = useState('MAIN');

  return (
    <div className="App">
      <Menu fixed='top'>
        <Container>
          <Menu.Item as='a' header>
            port:tamumu
          </Menu.Item>

          <Dropdown item simple text='Apps'>
            <Dropdown.Menu>
              <Dropdown.Item>Agile</Dropdown.Item>
              <Dropdown.Item>🚧 LearnJP</Dropdown.Item>
              <Dropdown.Item>🚧 Numberplace</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      {currentApp === 'MAIN' && <PortalApp/>}
      {currentApp === 'AGILE' && <AgileApp/>}
    </div>
  );
}

export default App;
