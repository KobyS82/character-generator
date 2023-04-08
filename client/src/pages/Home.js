import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_CHARACTERS } from '../utils/queries';

const Home = () => {
  const { loading } = useQuery(QUERY_CHARACTERS);

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
