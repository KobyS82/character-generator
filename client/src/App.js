import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import Spells from './pages/Spells';
import Game from "./pages/Game";
import Register from "./pages/Register";

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
          <div className="">
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
                path="/Spells" 
                element={<Spells />} 
              />
               <Route 
                path="/Game" 
                element={<Game />} 
              />
              <Route 
                path="/Contact" 
                element={<Contact />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/register" 
                element={<Register />} 
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
