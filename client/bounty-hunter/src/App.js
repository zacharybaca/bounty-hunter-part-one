import Form from "./components/Form/Form";
import Bounties from "./components/Bounties/Bounties";
import './App.css';

function App() {
  return (
    <div id="app-container">
      <h1>Bounty Tracker Application</h1>
      <Form />
      <Bounties />
    </div>
  );
}

export default App;
