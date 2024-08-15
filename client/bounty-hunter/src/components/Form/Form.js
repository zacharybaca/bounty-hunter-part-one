import React, { useState } from 'react';
import "./form.css";


export default function Form(props) {
    const initialInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || false,
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initialInputs);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setInputs(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div id="form-container">
            <form id="bounty-form" name="bountyForm">
                <label htmlFor="firstName">Enter Bounty's First Name: </label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" value={inputs.firstName} onChange={handleChange}/>
                <label htmlFor="lastName">Enter Bounty's Last Name: </label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={inputs.lastName} onChange={handleChange}/>
                <label htmlFor="living" id="living-label">Is The Bounty Still Alive?: 
                    <input type="checkbox" id="living" name="living" checked={inputs.living} onChange={handleChange}/>
                </label>
                <label htmlFor="bountyAmount">How Much Is The Bounty Worth?: </label>
                <input type="number" id="bountyAmount" name="bountyAmount" placeholder="Bounty Amount" value={inputs.bountyAmount} onChange={handleChange}/>
                <label htmlFor="type">What Type Of Bounty Is The Target?</label>
                <select id="type" name="type" value={inputs.type} onChange={handleChange}>
                    <optgroup>
                        <option defaultValue value="">Select A Type</option>
                        <option value="sith">Sith</option>
                        <option value="jedi">Jedi</option>
                    </optgroup>
                </select>
            </form>
        </div>
    )
}
