import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_THOUGHTS } from '../utils/queries';
import Generator from '../components/Generator/Generator';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  return (
    <main>
      <div className="justify-center">
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
            <Generator />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
