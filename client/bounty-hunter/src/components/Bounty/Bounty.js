import React, { useState } from 'react';
import Form from '../Form/Form';
import "./bounty.css";


export default function Bounty(props) {
    const [showForm, setShowForm] = useState(false);


    return (
        <div id="bounty-container">
            <ul>
                {props.bounties.map((bounty) => {
                    {showForm ? <><Form /> <button type="button" onClick={() => setShowForm(prevState => !prevState)}>Close</button></>: 
                        <li key={bounty.id}>
                            <>
                            <h1>`${bounty.firstName} ${bounty.lastName}`</h1>
                            <h3>`Living: ${bounty.living}`</h3>
                            <h3>`Amount: ${bounty.bountyAmount}`</h3>
                            <h3>`Type: ${bounty.type}`</h3>
                            <button type="submit">Edit</button>
                            <button type="button">Delete</button>
                            </>    
                    </li>
                    }
                })}
            </ul>
        </div>
    )
}
