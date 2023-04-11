import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
<<<<<<< HEAD
import Generator from './components/Generator/Generator';

=======
import About from "./pages/About"; 
import Minigame from "./pages/Game";
import Contact from "./pages/Contact";
import Creators from './pages/Creators';
>>>>>>> newbranch

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              {/* do this for all the different pages */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
<<<<<<< HEAD
                path="/login" 
                element={<Login />} 
              />
=======
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/Contact" 
                element={<Contact />} 
              />
              <Route 
                path="/Creators" 
                element={<Creators />} 
              />
              
>>>>>>> newbranch
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
