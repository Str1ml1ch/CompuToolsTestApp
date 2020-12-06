import React from 'react';
import {NavBar} from './Components/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoute} from './routs'

function App() {

const routs = useRoute()

  return (
    <Router>
      <NavBar/>
      {routs}
      </Router>
  );
}

export default App;
