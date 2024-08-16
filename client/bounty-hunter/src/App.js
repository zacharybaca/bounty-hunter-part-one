/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Form from "./components/Form/Form.js";
import Bounties from "./components/Bounties/Bounties.js";
import './App.css';

function App() {
  const [bounties, setBounties] = useState([]);
  
  // Function To Get All of Bounties
  const getBounties = async () => {
    const response = await fetch('/api/bounties');
    const data = await response.json();
    console.log(data);
    setBounties(data);
  }

  // Function To Add a Bounty
  const addBounty = async (newBounty) => {
    const response = await fetch('/api/bounties', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBounty)
    })
    const data = await response.json();

    setBounties(prevState => ([
      ...prevState,
      {
      ...data
    }]))
  }

  // Function To Delete Bounty
  const deleteBounty = async (id) => {
    const response = await fetch(`/api/bounties/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: null
    })

    const data = await response.json();

    setBounties([...data]);
  }

  useEffect(() => {
    getBounties();
  }, [])

  return (
    <div id="app-container">
      <h1 id="app-heading">Bounty Hunter Tracker Application</h1>
      <Form submitBounty={addBounty} bttnText="Add Bounty"/>
      <Bounties bounties={bounties} deleteBounty={deleteBounty}/>
    </div>
  );
}

export default App;
