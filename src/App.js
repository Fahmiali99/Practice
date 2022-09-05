import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../src/components/layout/NavigationBar";
import Home from "../src/components/pages/Home";
import Table from "./components/pages/Tablevaksin/Table/";

function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/table" component={Table} />
        </Switch>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
