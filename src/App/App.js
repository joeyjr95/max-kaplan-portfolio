import React from "react";
import Header from "../Routes/Header/Header";
import LandingPage from "../Routes/LandingPage/LandingPage";
import Dates from "../Routes/Dates/Dates";
import About from "../Routes/About/About";
import Footer from '../Routes/Footer/Footer';
import Contact from '../Routes/Contact/Contact'
import { Route, Switch } from "react-router-dom";



export default class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <Header />

        <main>
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
          </Switch>
          <Switch>
            <Route path={"/shows"} component={Dates} />
          </Switch>
          <Switch>
            <Route path={"/about"} component={About} />
          </Switch>
          <Switch>
            <Route path={"/contact"} component={Contact} />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}
