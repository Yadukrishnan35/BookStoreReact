import './App.css';
  //import DashBar from './components/dashboard/DashBar';
//import ForgetPassword from './components/forgetPassword/ForgetPassword';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <HomePage></HomePage>            
{/* <ForgetPassword/>                         */}
{/* <DashBar/> */}
    </div>
  );
}

export default App;
