import React, { useState } from 'react';
import Form from '../Form/Form.js';
import "./bounty.css";


export default function Bounty(props) {
    const [showForm, setShowForm] = useState(false);
    console.log('Props: ', props)

    return (
        <div id="bounty-container">
            {!showForm ? <>
                <h1 id="name-heading">Name: {props.firstName} {props.lastName}</h1>
                <h3>Living: {props.living}</h3>
                <h3>`Amount: {props.bountyAmount}`</h3>
                <h3>`Type: {props.type}`</h3>
                <button type="button">Delete</button>
                <button type="button" onClick={() => setShowForm(prevState => !prevState)}>Edit</button>
                </> : <><Form bttnText="Submit Edit" firstName={props.firstName} lastName={props.lastName} living={props.living} bountyAmount={props.bountyAmount} type={props.type}/> <button type="button" onClick={() => setShowForm(prevState => !prevState)}>Close</button></>}   
        </div>
    )
}
