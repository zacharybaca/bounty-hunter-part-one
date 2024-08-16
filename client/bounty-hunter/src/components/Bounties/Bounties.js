/* eslint-disable array-callback-return */
import "./bounties.css";
import Bounty from "../Bounty/Bounty.js";

export default function Bounties(props) {
  console.log('PROPS: ', props.bounties[0].firstName)
  return (
    <div id="bounties-container">
      {props.bounties[0].firstName ? 
      <ul id="bounty-list">
        {props.bounties.map((bounty) => (
          <li key={bounty.id}>
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
      : <h1>No Bounties Recorded</h1>
        }
    </div>
  );
}

