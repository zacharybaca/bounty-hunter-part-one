/* eslint-disable array-callback-return */
import "./bounties.css";
import Bounty from "../Bounty/Bounty.js";

export default function Bounties(props) {
  
  return (
    <div id="bounties-container">
      <ul id="bounty-list">
        {props.bounties.length === 0 ? <h1>No Bounties Recorded</h1> : props.bounties.map((bounty) => (
          <li key={bounty._id}>
            <Bounty
              id={bounty._id}
              firstName={bounty.firstName}
              lastName={bounty.lastName}
              living={bounty.living}
              bountyAmount={bounty.bountyAmount}
              type={bounty.type}
              deleteBounty={props.deleteBounty}
              editBounty={props.editBounty}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

