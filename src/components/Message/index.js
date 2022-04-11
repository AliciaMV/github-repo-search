// == Import
// npm
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Component
const Message = ({ resultsCounter }) => (
  <Segment textAlign='left'>
    <p>La recherche a donné {resultsCounter} résultats</p>
  </Segment>
);

Message.propTypes = {
  resultsCounter: PropTypes.number.isRequired,
};

// == Extract
export default Message;
