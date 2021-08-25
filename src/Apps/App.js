import React from "react";
import { Container, Grid } from "@material-ui/core";
// import Profile from "../Components/Profile/Profile";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

const App = () => {
  return (
    <>
      <Container className={"top_5"}>
        <Grid container spacing={7}>
          {/* <Grid item xs={12} sm={12} md={4} lg={3} style={{}}>
            <Profile />
          </Grid> */}
          <Grid item xs>
            {/* <Profile /> */}
            <Router>
              <Header />
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
