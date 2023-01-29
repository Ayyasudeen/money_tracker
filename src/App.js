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
    </main>
  );
}

export default App;
