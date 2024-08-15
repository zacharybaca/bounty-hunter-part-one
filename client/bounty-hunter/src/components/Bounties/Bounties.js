/* eslint-disable array-callback-return */
import "./bounties.css";
import Bounty from "../Bounty/Bounty.js";

export default function Bounties(props) {
  return (
    <div id="bounties-container">
      <ul>
        {props.bounties.map((bounty) => (
          <li key={bounty.id}>
            {/* Add a unique key for each list item */}
            <Bounty
              firstName={bounty.firstName}
              lastName={bounty.lastName}
              living={bounty.living}
              bountyAmount={bounty.bountyAmount}
              type={bounty.type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

