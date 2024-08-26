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
  try {
      const response = await fetch(`/api/bounties/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (!response.ok) {
          throw new Error('Failed to delete the bounty');
      }

      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== id));
  } catch (error) {
      console.error('Error:', error);
  }
}

// Function To Edit Bounty
const editBounty = async (updates, id) => {
  try {
    const response = await fetch(`/api/bounties/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updates)
    });

    const data = await response.json().catch(() => null);
    console.log('Data in Edit: ', data)
    setBounties(prevBounties => prevBounties.map((bounty) => bounty._id !== id ? bounty : {...data}))

  } catch(error) {
    console.error("Error: ", error);
  }
}

// Function to Display All Jedis
const getJedis = async () => {
  const res = await fetch('api/bounties/type?type=jedi');
  const data = await res.json();
  setBounties(data);
}

// Function to Display All Siths
const getSiths = async () => {
  const res = await fetch('api/bounties/type?type=sith');
  const data = await res.json();
  setBounties(data);
}

// Function to Display All Living Bounties
const getLiving = async () => {
  const res = await fetch('api/bounties/living?living=true');
  const data = await res.json();
  setBounties(data);
}

// Function to Display All Deceased Bounties
const getDeceased = async () => {
  const res = await fetch('api/bounties/living?living=false');
  const data = await res.json();
  setBounties(data);
}

  useEffect(() => {
    getBounties();
  }, [])

  return (
    <div id="app-container">
      <h1 id="app-heading">Bounty Hunter Tracker Application</h1>
      <Form submitBounty={addBounty} getJedis={getJedis} getSiths={getSiths} getAllBounties={getBounties} getLiving={getLiving} getDeceased={getDeceased} bttnText="Add Bounty"/>
      <Bounties bounties={bounties} deleteBounty={deleteBounty} editBounty={editBounty}/>
    </div>
  );
}

export default App;
