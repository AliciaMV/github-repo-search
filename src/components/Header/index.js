// == Import
// npm
import PropTypes from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
// local
import githubLogo from 'src/assets/images/logo-github.png';
// styles
import './header.scss';

// == Component
const Header = ({ activeItem, handleItemClick }) => (
  <header>
    <Image src={githubLogo} centered />
    <Menu>
      <Menu.Item
        id="search"
        as={NavLink}
        to="/"
        active={activeItem === 'search'}
        onClick={(event) => { handleItemClick(event.currentTarget.id)
        }}
      >
        Search
      </Menu.Item>
        <Menu.Item id="faq"
        as={NavLink}
        to="/faq"
        name="faq"
        active={activeItem === 'faq'}
        onClick={(event) => { handleItemClick(event.currentTarget.id) 
        }}
      >
        FAQ
      </Menu.Item>
    </Menu>
  </header>
);

Header.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

// == Extract
export default Header;
