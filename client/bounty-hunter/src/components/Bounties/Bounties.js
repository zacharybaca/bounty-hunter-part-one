import "./bounties.css";
import Bounty from "../Bounty/Bounty";


export default function Bounties(props) {
    return (
        <div id="bounties-container">
            <Bounty bounties={props.bounties}/>
        </div>
    )
}
