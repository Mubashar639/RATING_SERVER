import React from 'react';
import Home from './components/home/home';
import About from "./components/about/about";
import Footer from "./components/footer/footer.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>       
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
