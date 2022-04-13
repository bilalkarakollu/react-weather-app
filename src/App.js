import './App.css';

function App() {

  const handle = () => {
    alert(process.env.REACT_APP_API_ENDPOINT)
  }

  return (
    <div className="App">
      <button onClick={() => handle()}>asdas</button>
    </div>
  );
}

export default App;
