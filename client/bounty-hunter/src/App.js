import React, { useState, useEffect } from 'react';
import Form from "./components/Form/Form";
import Bounties from "./components/Bounties/Bounties";
import './App.css';

function App() {
  const [bounties, setBounties] = useState([]);
  

  const getBounties = async () => {
    const response = await fetch('/bounty')
    const data = await response.json();

    setBounties(data);
  }

  const addBounty = async (newBounty) => {
    const response = await fetch('/bounty', {
      method: "POST",
      body: JSON.stringify(newBounty)
    })
    const data = await response.json();

    setBounties(prevState => ({
      ...prevState,
      data
    }))
  }

  useEffect(() => {
    getBounties();
  }, [])

  return (
    <div id="app-container">
      <h1 id="app-heading">Bounty Hunter Tracker Application</h1>
      <Form addBounty={addBounty} bttnText="Add Bounty"/>
      <Bounties submitBounty={addBounty} bounties={bounties}/>
    </div>
  );
}

export default App;
