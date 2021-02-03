/* Routing */
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* Routing */
import About from "./components/About.js";
import Index from "./components/Index";

/*There is a bug in the line 16 -> if path comes / router is not working!! Be CAREFUL */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
