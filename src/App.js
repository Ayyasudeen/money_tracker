import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("")
  const [datetime, setDatetime] = useState("")
  const [description, setDescription] = useState("")
  const [moneyvalue, setMoneyvalue] = useState("")
  const [transactype, setTransactype] = useState(1)
  const [transactionsData, setTransactionsData] = useState([])
  const [totalVal, setTotalVal] = useState()

  // takes all the data and sends it to the backend
  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const date = new Date(datetime)

  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, date, description, transactype, moneyvalue})
  })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
        getAllTransactions()
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
        let value = data.map(d=> Number(d.moneyvalue))
        let totalValue = value.reduce((total, num) => total + num);
        setTotalVal(totalValue)
      })
  }

  useEffect(() => {
    getAllTransactions()
  }, [])
  

  return (
    <main>
      <h1>
        ${totalVal} <span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Title" />
          <input type="datetime-local" value={datetime} onChange={e=> setDatetime(e.target.value)}/>
        </div>
        <div className="description">
          <input type="text" value={description} onChange={e=> setDescription(e.target.value)} placeholder="Description" />
          <select value={transactype} onChange={e=> setTransactype(e.target.value)}>
            <option value={1}>Expense</option>
            <option value={0}>Income</option>
          </select>
        </div>
        <div className="description">
          <input type="number" value={moneyvalue} pattern= "[0-9]" onChange={e=> setMoneyvalue(e.target.value)} placeholder="$" />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        {
          transactionsData.map(data => <div key={data._id} className="transaction">
          <div className="left">
            <div className="name">{data.name}</div>
            <div className="description">{data.description}</div>
          </div>
          <div className="right">
            <div className="price">${data.moneyvalue}</div>
            <div className="datetime">{data.date}</div>
          </div>
        </div>)
        }
      </div>
    </main>
  );
}

export default App;
