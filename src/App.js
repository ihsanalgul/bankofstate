import './App.css';
import React from "react";
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from './home/Home';
import Login from "./login/Login";
import Register from "./register/Register";
import User from './user/User';
import Admin from './admin/Admin';
import Deposit from './deposit/Deposit';
import Withdraw from './withdraw/Withdraw';
import Logout from './logout/Logout';
import Transfer from './transfer/Transfer';
import AddRecipient from './transfer/AddRecipient';
import UserMgmt from './admin/UserMgmt';


function App() {
  return (
   
    <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route path="/login"> <Login/> </Route>
      <Route path="/logout"> <Logout/> </Route>
      <Route path="/admin"> <Admin /> </Route>
      <Route path="/user"> <User/> </Route>
      <Route path="/logout"><h1> Logout</h1> </Route>
      <Route path="/register"><Register /></Route>
      <Route path="/deposit"><Deposit /></Route>
      <Route path="/withdraw"><Withdraw /></Route>
      <Route path="/addRecipient"><AddRecipient /></Route>
      <Route path="/transfer"><Transfer /></Route>
      <Route path="/userMgmt"><UserMgmt /></Route>
      <Route path="/" component={Home}/>
      </Switch>
      <Footer />
       </div>
    </Router>
   
  );
}

export default App;
