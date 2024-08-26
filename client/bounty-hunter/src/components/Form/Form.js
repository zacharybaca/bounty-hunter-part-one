import React, { useState } from 'react';
import "./form.css";


export default function Form(props) {
    const initialInputs = {
        id: props.id || "",
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || false,
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initialInputs);

    const [selectedFilter, setSelectedFilter] = useState("");

    function handleFilter(e) {
        const { value } = e.target;

        setSelectedFilter(value);

        if (value === "all") {
            props.getAllBounties();
        }
        else if (value === "sith") {
            props.getSiths();
        }
        else if (value === "jedi") {
            props.getJedis();
        }
        else if (value === "living") {
            props.getLiving();
        }
        else if (value === "deceased") {
            props.getDeceased();
        }

        setSelectedFilter("");
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setInputs(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.submitBounty(inputs, inputs.id);
        setInputs(initialInputs);
        if (props.toggleForm) {
            props.toggleForm((prevState) => !prevState);
        }
    }

    return (
        <div id="form-container" onSubmit={handleSubmit}>
            <form id="bounty-form" name="bountyForm">
                <label htmlFor="firstName">Enter Bounty's First Name: </label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" value={inputs.firstName} onChange={handleChange}/>
                <label htmlFor="lastName">Enter Bounty's Last Name: </label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={inputs.lastName} onChange={handleChange}/>
                <label htmlFor="living" id="living-label">Is The Bounty Still Alive?: 
                    <input type="checkbox" id="living" name="living" checked={inputs.living} value={inputs.living.checked} onChange={handleChange}/>
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
                <button type="submit" id="add-bounty-button">{props.bttnText}</button>
                <label htmlFor="filterBounty">Select A Filter:</label>
                <select id="filterBounty" name="filterBounty" value={selectedFilter} onChange={handleFilter}>
                    <optgroup>
                        <option defaultValue value="">Filter Your List of Bounties</option>
                        <option value="all">Display All Bounties</option>
                        <option value="sith">Display All Siths</option>
                        <option value="jedi">Display All Jedis</option>
                        <option value="living">Display All Living Bounties</option>
                        <option value="deceased">Display All Deceased Bounties</option>
                    </optgroup>
                </select>
            </form>
        </div>
    )
}
