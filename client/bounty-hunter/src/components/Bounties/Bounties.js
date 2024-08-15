import "./bounties.css";
import Bounty from "../Bounty/Bounty";


export default function Bounties(props) {
    return (
        <div id="bounties-container">
            <ul>
                {props.bounties.map((bounty) => {
                    <li>
                        <Bounty 
                            firstName={bounty.firstName}
                            lastName={bounty.lastName}
                            living={bounty.living}
                            bountyAmount={bounty.bountyAmount}
                            type={bounty.type}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}
