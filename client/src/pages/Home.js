import React from 'react';
import { useQuery } from '@apollo/client';


import { QUERY_CHARACTERS } from '../utils/queries';
import Generator from '../components/Generator/Generator';
import ClassGenerator from '../components/ClassGenerator/ClassGenerator';
import RaceGenerator from '../components/RaceGenerator/RaceGenerator';

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
            <ClassGenerator />
            <RaceGenerator />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
