import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../../components/ViewNavigation';
import PostList from '../../components/PostList';
import TableLine from '../../components/TableLine';
import TableList from '../../components/TableList';
import { Post as PostType } from '../../models/post';
import CurrentPost from '../../components/CurrentPost';

type HomeProps = {
  isError: boolean;
  isLoading: boolean;
  sortedData: PostType[];
  setSortedData: React.Dispatch<React.SetStateAction<PostType[]>>;
  searchValue: string;
};

const Home: FC<HomeProps> = (props) => {
  const {
    isError, isLoading, sortedData, setSortedData, searchValue,
  } = props;

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          index
          element={(
            <div style={{ padding: '1rem', textAlign: 'center', fontSize: '17px' }}>
              <p>Select view</p>
            </div>
          )}
        />
        <Route
          path="listView"
          element={(
            <PostList
              isError={isError}
              isLoading={isLoading}
              postData={sortedData}
              searchValue={searchValue}
            />
          )}
        />
        <Route
          path="tableView"
          element={(
            <TableList
              isError={isError}
              isLoading={isLoading}
              postData={sortedData}
              setSortedData={setSortedData}
            >
              {sortedData?.map((post: PostType) => (
                <TableLine key={post.id} data={post} />
              ))}
            </TableList>
          )}
        />
        <Route path="listView/:id" element={<CurrentPost sortedData={sortedData} />} />
        <Route path="tableView/:id" element={<CurrentPost sortedData={sortedData} />} />
      </Routes>
    </>
  );
};

export default Home;
