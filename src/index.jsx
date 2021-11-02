import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { GlobalStyle } from "./utils/GlobalStyle"
import Header from "../src/components/Header"
import Aside from "../src/components/Aside"
import Links from "./components/Links"
import Profil from "./pages/Profil"
import Error from "./pages/Error"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Aside />
      <Route exact path="/">
        <Links />
      </Route>
      <Route
        path="/profil/:id"
        render={(props) => <Profil {...props} />}
      ></Route>
      <Route path="/Error">
        <Error />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
