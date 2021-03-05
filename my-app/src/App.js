import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Contact from './Contact'

function App() {
    
    return (
      <Router>
          <div className="App">

          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>

          <Footer />

        </div>
      </Router>
  );
}

export default App;
