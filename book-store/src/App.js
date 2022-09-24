
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerDetails from './components/customerDetails/CustomerDetails';
//import Displaybook from './components/books/Displaybook';

//import DashBar from './components/dashboard/DashBar';
  //import DashBar from './components/dashboard/DashBar';
import ForgetPassword from './components/forgetPassword/ForgetPassword';
import MyCart from './components/myCart/MyCart';
import OrderSummery from './components/OrderSummery/OrderSummery';
import Cart from './pages/Cart/Cart';
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
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/customer' element={<CustomerDetails/>}/>
        <Route path='/orderSuccess' element={<OrderSuccess/>}/>
        <Route path='/ordersummery' element={<OrderSummery/>}/>
      </Routes>
        </BrowserRouter>
{/* <HomePage></HomePage>             */}
{/* <ForgetPassword/>                         */}
{/* <DashBar/> */}
    </div>
  );
}

export default App;
