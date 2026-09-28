import { useState, useEffect } from "react";
import "./App.css";
function App() {

const [votes, setVotes] = useState({
  Ali: 0,
  Ahmed: 0,
});

useEffect(() => {
  console.log("Votes updated:", votes);
}, [votes]);
  
   
   return (
  <div>
    <h1>Voting App</h1>
    <h2>Ali</h2>
    <p>Choose your candidate and vote</p>
  <button onClick={() => setVotes({ ...votes, Ali: votes.Ali + 1 })}>
  Vote
</button>
<p>Votes: {votes.Ali}</p>

<h2>Ahmed</h2>
<button onClick={() => setVotes({ ...votes, Ahmed: votes.Ahmed + 1 })}>
  Vote
</button>
<p>Votes: {votes.Ahmed}</p>

<h2>Total Votes: {votes.Ali + votes.Ahmed}</h2>
<button onClick={() => setVotes({ Ali: 0, Ahmed: 0 })}>
  Reset Votes
</button>
  </div>
);

}
export default App;


