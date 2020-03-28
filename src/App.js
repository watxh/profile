import React from 'react';
import logo from './logo.svg';
import './App.css';

import Page from "./components/atoms/Page"
import Topbar from "./components/organisms/Topbar"
import Profilecard from "./components/organisms/Profilecard"

function App() {
  return (
    <Page>
      <Topbar></Topbar>
      <Profilecard></Profilecard>
    </Page>
  );
}

export default App;
