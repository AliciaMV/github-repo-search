// == Import: npm
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Routes, Route } from 'react-router-dom';
// == Import: local
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Faq from '../Faq';
import NotFound from '../NotFound';
// == data et styles
import './styles.scss';

// == Composant
function Annuaire() {
  // State variables declarations
  const [dataApi, setDataApi] = useState([]);
  const [search, setSearch] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('search');
  const [resultsTotal, setResultsTotal] = useState(0);

  // this function will return an array of filtered data, which would be later send to the
  // Result component in order to only receive the ones that are going to be used there
  const filterData = (data) => {
    const filteredData = data.map((datum) => (
      {
        id: datum.id,
        name: datum.name,
        owner: datum.owner.login,
        img: datum.owner.avatar_url,
        desc: datum.description,
      }
    ));
    return filteredData;
  };

  // retrieving data from the API before to store them in the State, set the results counter as well
  const loadData = () => {
    
    axios.get(`https://api.github.com/search/repositories?q=${search ? search : 'javascript' }`)
      .then((response) => {
        setDataApi(response.data.items);
        setResultsTotal(response.data.total_count);
      })
      .catch(() => {console.log('errors');})
      .finally();
  };
  useEffect(() => { loadData() }, [search]);

  // will be use in the navBar to notify the currently open tab
  const handleMenuClick = (currentItem) => {
    setActiveMenuItem(currentItem);
  };

  return (
    <div>
      <Container className="segment centered">
        <Header activeItem={activeMenuItem} handleItemClick={handleMenuClick} />
        <Routes>
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/"
            element={(
              <main>
                <SearchBar
                  searchValue={search}
                  handleInput={setSearch}
                  handleSearchSubmit={loadData}
                />
                <Message resultsCounter={resultsTotal} />
                <ReposResults reposData={filterData(dataApi)} />
              </main>
          )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

// == Export
export default Annuaire;
