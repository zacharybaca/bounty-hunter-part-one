import React, { useState } from 'react';
import Form from '../Form/Form.js';
import "./bounty.css";


export default function Bounty(props) {
    const [showForm, setShowForm] = useState(false);
    console.log('Props: ', props)

    return (
        <div id="bounty-container">
            {!showForm ? <>
                <h1 id="name-heading"><span className="heading">Name:</span> {props.firstName} {props.lastName}</h1>
                <h3><span className="heading">Living:</span> {props.living ? "✅" : "❌"}</h3>
                <h3><span className="heading">Amount:</span> {props.bountyAmount}</h3>
                <h3><span className="heading">Type:</span> {props.type}</h3>
                <button type="button" id="delete-button">Delete</button>
                <button type="button" onClick={() => setShowForm(prevState => !prevState)} id="edit-button">Edit</button>
                </> : <><Form bttnText="Submit Edit" firstName={props.firstName} lastName={props.lastName} living={props.living} bountyAmount={props.bountyAmount} type={props.type}/> <button type="button" onClick={() => setShowForm(prevState => !prevState)}>Close</button></>}   
        </div>
    )
}
