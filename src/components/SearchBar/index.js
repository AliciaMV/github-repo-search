// == Import
// npm
import PropTypes from 'prop-types';
import { Input, Segment, Form } from 'semantic-ui-react';
// local
// styles
import './searchBar.scss';

// == Component
const SearchBar = ({ searchValue, handleInput, handleSearchSubmit }) => (
  <Segment>
    <Form
      onSubmit={(event) => (
        handleSearchSubmit()
      )}
    >
      <Input
        fluid
        icon="search"
        iconPosition="left"
        type="text"
        placeholder="Looking for something?"
        value={searchValue}
        onChange={(event) => {
          handleInput(event.currentTarget.value);
        }}
      />
    </Form>
  </Segment>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
};

// == Extract
export default SearchBar;
