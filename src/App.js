import './App.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Header from "./header/Header";


function App() {
  return (
   
    <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route path="/login"><h1> Login</h1>  </Route>
      <Route path="/logout"><h1> Logout</h1> </Route>
      <Route path="/header"><h1> Header </h1></Route>
      <Route path="/"></Route>
      </Switch>
       </div>
    </Router>
   
  );
}

export default App;
