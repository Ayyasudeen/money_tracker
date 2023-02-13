import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("")
  const [datetime, setDatetime] = useState("")
  const [description, setDescription] = useState("")

  // takes all the data and sends it to the backend
  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";

  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, datetime, description})
  })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
  }
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="+$200 Samsung TV" />
          <input type="datetime-local" value={datetime} onChange={e=> setDatetime(e.target.value)}/>
        </div>
        <div className="description">
          <input type="text" value={description} onChange={e=> setDescription(e.target.value)} placeholder="description" />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2023-01-29 13:58</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2023-01-29 13:58</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2023-01-29 13:58</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
