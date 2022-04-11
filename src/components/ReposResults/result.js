// == Import
// npm
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Component
const Result = ({ name, desc, owner, img }) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{owner}</span>
      </Card.Meta>
      <Card.Description>
        {desc}
      </Card.Description>
    </Card.Content>
  </Card>
);

Result.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  owner: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

Result.defaultProps = {
  desc: '',
};

// == Extract
export default Result;
