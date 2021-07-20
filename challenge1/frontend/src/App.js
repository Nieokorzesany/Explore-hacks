import 'react-router';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
import './App.scss';

function App() {
  return (
    <div className="App">
         <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>

        <Footer />
    </div>
  );
}

export default App;
