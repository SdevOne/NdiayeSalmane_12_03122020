import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GlobalStyle } from "./utils/GlobalStyle"
import Header from "../src/components/Header"
import Aside from "../src/components/Aside"
import Links from "./components/Links"
import Profil from "./pages/Profil"
import Error from "./pages/Error"

const Root = () => (
  <Router>
    <Header />
    <Aside />
    <Switch>
      <Route exact path="/" component={Links} />
      <Route exact path="/profil/:id" component={Profil} />
      <Route exact path="/Error" component={Error} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
)
