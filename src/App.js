import React from 'react';
import Home from './components/home/home';
import About from "./components/about/about";
import Footer from "./components/footer/footer.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Rankings from './components/ranking/rankings';
import CertifiedProducts from './components/certifiedProducts/certifiedProducts';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>       
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ranking" component={Rankings} />
          <Route path="/certified" component={CertifiedProducts} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
