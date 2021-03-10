import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container,
  Dropdown,
  Menu,
  Header,
} from 'semantic-ui-react'

import PortalApp from './components/portal/PortalApp'
import AgileApp from './components/agile/AgileApp'


function App() {
  return (
    <Router className="App">
      <Menu fixed='top' id="top_bar">
        <Container>
          <Menu.Item header as={Link} to='/'>
            port:tamumu
          </Menu.Item>

          <Dropdown item simple text='apps'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/agile'>
                agile</Dropdown.Item>
              <Dropdown.Item as={Link} to='/nihongo'>
                🚧 nihongo</Dropdown.Item>
              <Dropdown.Item as={Link} to='/sudoku'>
                🚧 numberplace</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Switch>
        <Route path="/agile">
          <AgileApp />
        </Route>
        <Route path="/nihongo">
          <Container style={{ marginTop: '7em' }}>
            <Header>Come back later!</Header>
          </Container>
        </Route>
        <Route path="/sudoku">
          <Container style={{ marginTop: '7em' }}>
            <Header>Come back later!</Header>
          </Container>
        </Route>
        <Route path="/">
          <PortalApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
