import React from "react";
import Header from "../Routes/Header/Header";
import LandingPage from "../Routes/LandingPage/LandingPage";
import Footer from '../Routes/Footer/Footer';
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
        </main>
        <Footer/>
      </div>
    );
  }
}
