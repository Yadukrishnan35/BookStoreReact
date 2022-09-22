
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerDetails from './components/customerDetails/CustomerDetails';
//import Displaybook from './components/books/Displaybook';

//import DashBar from './components/dashboard/DashBar';
  //import DashBar from './components/dashboard/DashBar';
import ForgetPassword from './components/forgetPassword/ForgetPassword';
import MyCart from './components/myCart/MyCart';
import Dashboard from './pages/Dashboard/Dashboard';
import GetBookById from './pages/GetBookById/GetBookById';
import HomePage from './pages/HomePage';
import OrderSuccess from './pages/OrderSuccessfull/OrderSuccess';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/forgotpassword' element={<ForgetPassword/>} />
        <Route path='/getBookById' element={<GetBookById/>} />
        <Route path='/cart' element={<MyCart/>}/>
        <Route path='/customer' element={<CustomerDetails/>}/>
        <Route path='/order' element={<OrderSuccess/>}/>
      </Routes>
        </BrowserRouter>
{/* <HomePage></HomePage>             */}
{/* <ForgetPassword/>                         */}
{/* <DashBar/> */}
    </div>
  );
}

export default App;
