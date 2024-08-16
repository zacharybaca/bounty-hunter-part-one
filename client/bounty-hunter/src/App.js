/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Form from "./components/Form/Form.js";
import Bounties from "./components/Bounties/Bounties.js";
import './App.css';

function App() {
  const [bounties, setBounties] = useState([]);
  

  const getBounties = async () => {
    const response = await fetch('/api/bounties');
    const data = await response.json();
    console.log(data);
    setBounties(data);
  }

  const addBounty = async (newBounty) => {
    const response = await fetch('/api/bounties', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBounty)
    })
    const data = await response.json();

    setBounties(prevState => ([{
      ...prevState,
      ...data
    }]))
  }

  useEffect(() => {
    getBounties();
  }, [])

  return (
    <div id="app-container">
      <h1 id="app-heading">Bounty Hunter Tracker Application</h1>
      <Form submitBounty={addBounty} bttnText="Add Bounty"/>
      <Bounties bounties={bounties}/>
    </div>
  );
}

export default App;
