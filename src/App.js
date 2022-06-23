import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {

  const condition = "condition";

  return (
    <div className="App">
      <Welcome fname={"FNAME"} lname="LNAME" />
      <Header title={"ABC"} />

      {
        // 조건부 렌더링
        // Falsy 조심 !!
      condition === "condition" ? "CONDITION YES": "CONDITION NO"
      }

      <label htmlFor="agreement-el">동의</label>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
    </div>
  );
}

export default App;
