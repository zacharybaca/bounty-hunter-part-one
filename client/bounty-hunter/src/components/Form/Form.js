import "./form.css";


export default function Form() {
    return (
        <div id="form-container">
            <form id="bounty-form" name="bountyForm">
                <label htmlFor="firstName">Enter Bounty's First Name: </label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                <label htmlFor="lastName">Enter Bounty's Last Name: </label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <label htmlFor="living" id="living-label">Is The Bounty Still Alive?: 
                    <input type="checkbox" id="living" name="living" />
                </label>
                <label htmlFor="bountyAmount">How Much Is The Bounty Worth?: </label>
                <input type="number" id="bountyAmount" name="bountyAmount" placeholder="Bounty Amount" />
                <label htmlFor="type">What Type Of Bounty Is The Target?</label>
                <select id="type" name="type">
                    <optgroup>
                        <option selected value="">Select A Type</option>
                        <option value="sith">Sith</option>
                        <option value="jedi">Jedi</option>
                    </optgroup>
                </select>
            </form>
        </div>
    )
}
