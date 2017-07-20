import './layout.css';
import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const Layout: React.SFC = props =>
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>Overwatch Heros</Header.Content>
    </Header>
    <Container>
      {props.children}
    </Container>
  </div>;

export default Layout;
