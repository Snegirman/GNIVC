import React, { useState, useEffect, ChangeEventHandler } from 'react';
import {
  Link, Outlet, Route, Routes,
} from 'react-router-dom';

import { Post as PostType } from '../../models/post';
import useData from '../../hooks/useData';
import Search from '../Search';
import classes from './App.module.scss';
import Header from '../Header';
import Home from '../../pages/home';
import About from '../../pages/about';
import NotFound from '../NotFound';

type LayoutProps = {
  handleSearch: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { handleSearch, searchValue } = props;
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Search handleSearch={handleSearch} value={searchValue} />
        <div className={classes.navLinkContainer}>
          <Link to="about" className={classes.navLink}>About site</Link>
          <Link to="jokes" className={classes.navLink}>Get some fun</Link>
        </div>
        <Outlet />
      </main>
    </>
  );
};

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [postData, isLoading, isError] = useData();
  const [sortedData, setSortedData] = useState<PostType[]>([]);

  useEffect(() => {
    if (searchValue.trim().length > 2) {
      setSortedData(postData.filter((post) => post.category.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setSortedData(postData);
    }
  }, [searchValue, postData, isError]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Routes>
      <Route path="/GNIVC" element={<Layout handleSearch={handleSearch} searchValue={searchValue} />}>
        <Route
          index
          element={(
            <div className={classes.welcomeText}>
              <p>{'WELCOME! Please, select \'Get some fun\' or you can read about site in \'About\''}</p>
            </div>
          )}
        />
        <Route
          path="jokes/*"
          element={(
            <Home
              isError={isError}
              isLoading={isLoading}
              setSortedData={setSortedData}
              sortedData={sortedData}
              searchValue={searchValue}
            />
          )}
        />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
