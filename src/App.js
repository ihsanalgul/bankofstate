import './App.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Header from "./header/Header";
import Home from './home/Home';


function App() {
  return (
   
    <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route path="/login"><h1> Login</h1>  </Route>
      <Route path="/logout"><h1> Logout</h1> </Route>
      <Route path="/register"><h1> Register </h1></Route>
      <Route path="/" component={Home}/>
      </Switch>
       </div>
    </Router>
   
  );
}

export default App;
