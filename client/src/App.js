import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import Creators from './pages/Creators';
import Game from "./pages/Game";

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
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/Creators" 
                element={<Creators />} 
              />
               <Route 
                path="/Game" 
                element={<Game />} 
              />
              <Route 
                path="/Contact" 
                element={<Contact />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
