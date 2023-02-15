import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("")
  const [datetime, setDatetime] = useState("")
  const [description, setDescription] = useState("")
  const [moneyValue, setMoneyValue] = useState("")
  const [transactionsData, setTransactionsData] = useState([])

  // takes all the data and sends it to the backend
  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const date = new Date(datetime)

  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, date, description})
  })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
  }

  function getAllTransactions() {
    const url = process.env.REACT_APP_API_URL + "/transactions";

  fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
        setTransactionsData(data)
      })
  }

  useEffect(() => {
    getAllTransactions()
  }, [])
  

  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Title" />
          <input type="datetime-local" value={datetime} onChange={e=> setDatetime(e.target.value)}/>
        </div>
        <div className="description">
          <input type="text" value={description} onChange={e=> setDescription(e.target.value)} placeholder="Description" />
          <select>
            <option value={1}>Expense</option>
            <option value={0}>Income</option>
          </select>
        </div>
        <div className="description">
          <input type="number" value={moneyValue} onChange={e=> setMoneyValue(e.target.value)} placeholder="$" />
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
