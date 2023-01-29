import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+$200 Samsung TV" />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder="description" />
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
