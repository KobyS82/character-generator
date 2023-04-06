import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div> Body </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
