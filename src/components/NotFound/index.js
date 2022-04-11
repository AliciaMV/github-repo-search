// == Import
// npm
import { Container, Message } from "semantic-ui-react";
// local
// styles
import './notFound.scss';

// == Composant
const NotFound = () => (
  <Container textAlign='center'>
    <Message negative>
      <Message.Header>404</Message.Header>
      <p centered>We're sorry but the page you're looking for doesn't seem to exist...</p>
    </Message>
  </Container>
);

// == Export
export default NotFound;
