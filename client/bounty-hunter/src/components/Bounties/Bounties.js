/* eslint-disable array-callback-return */
import "./bounties.css";
import Bounty from "../Bounty/Bounty.js";

export default function Bounties(props) {
  
  return (
    <div id="bounties-container">
      <ul id="bounty-list">
        {props.bounties.map((bounty) => (
          <li key={bounty.id}>
            <Bounty
              id={bounty.id}
              firstName={bounty.firstName}
              lastName={bounty.lastName}
              living={bounty.living}
              bountyAmount={bounty.bountyAmount}
              type={bounty.type}
              deleteBounty={props.deleteBounty}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

