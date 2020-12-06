import "./App.css";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        {/* <Toolbar /> */}
        <Route path="/" exact={true} component={Main} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/movie-detail" component={Detail} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
