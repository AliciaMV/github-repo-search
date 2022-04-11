// == Import
// npm
import PropTypes from 'prop-types';
import { Card, Container } from 'semantic-ui-react';
// local
import Result from './result';

// == Component
const ReposResults = ({ reposData }) => (
  <Container>
    <Card.Group itemsPerRow={3} stackable>
      {reposData.map((repo) => <Result key={`repo-${repo.id}`} {...repo} />) }
    </Card.Group>
  </Container>
);

ReposResults.propTypes = {
  reposData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Extract
export default ReposResults;
