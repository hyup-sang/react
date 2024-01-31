import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="FirstComponent">First Component</div>
  )
}
function SecondComponent() {
  return (
    <div className="SecondComponent">Second Component</div>
  )
}

export default App;
