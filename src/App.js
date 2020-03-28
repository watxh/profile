import React from 'react';
import './App.css';

import Page from "./components/atoms/Page"
import Topbar from "./components/organisms/Topbar"
import Profilecard from "./components/organisms/Profilecard"
import Projectlist from "./components/organisms/Projectlist"

function App() {
  return (
    <Page>
      <Topbar></Topbar>
      <Profilecard></Profilecard>
      <Projectlist></Projectlist>
    </Page>
  );
}

export default App;
