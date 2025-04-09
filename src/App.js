import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CurrentWeek from "./components/currentWeek";
import Home from "./components/home";
import AddDrink from "./components/addDrink";
import styled from "styled-components";
import PreviousWeek from "./components/previousWeek";

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  flex-grow: 1;
  text-align: justify;
  text-justify: auto;
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <BrowserRouter>
          <Navbar expand="sm" bg="primary" variant="dark" collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Item>
                  <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/currentWeek">
                    <Nav.Link>Current Week</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/previousWeek">
                    <Nav.Link>Previous Week</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/addDrink">
                    <Nav.Link>Log Drink</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <ContentDiv>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <Home
                  currentWeek={this.state.currentWeek}
                  totalUnitsThisWeek={this.state.totalUnitsThisWeek}
                  totalNumberOfDrinksThisWeek={
                    this.state.totalNumberOfDrinksThisWeek
                  }
                  previousWeek={this.state.previousWeek}
                  totalUnitsLastWeek={this.state.totalUnitsLastWeek}
                  totalNumberOfDrinksLastWeek={
                    this.state.totalNumberOfDrinksLastWeek
                  }
                />
              </Route>
            </Switch>
            <Switch>
              <Route path="/currentWeek">
                <CurrentWeek drinks={this.state.drinksThisWeek} />
              </Route>
              <Route path="/previousWeek">
                <PreviousWeek drinks={this.state.drinksLastWeek} />
              </Route>
              <Route path="/addDrink">
                <AddDrink />
              </Route>
            </Switch>
          </ContentDiv>
        </BrowserRouter>
      </StyledContainer>
    );
  }

  state = {
    drinksThisWeek: [],
    drinksLastWeek: [],
    totalUnitsThisWeek: [],
    totalUnitsLastWeek: [],
    currentWeek: [],
    previousWeek: [],
    totalNumberOfDrinksThisWeek: [],
    totalNumberOfDrinksLastWeek: [],
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BASE_URL}api/drink/drinksThisWeek`)
      .then((res) => res.json())
      .then((drinksData) => {
        this.setState({ drinksThisWeek: drinksData });
      })
      .catch(console.log);

    fetch(`${process.env.REACT_APP_BASE_URL}api/drink/drinksLastWeek`)
      .then((res) => res.json())
      .then((drinksData) => {
        this.setState({ drinksLastWeek: drinksData });
      })
      .catch(console.log);

    fetch(
      `${process.env.REACT_APP_BASE_URL}api/drink/totalUnitsThisWeek?consumedBy=Paul`
    )
      .then((res) => res.json())
      .then((totalData) => {
        this.setState({ totalUnitsThisWeek: totalData });
      })
      .catch(console.log);

    fetch(
      `${process.env.REACT_APP_BASE_URL}api/drink/totalUnitsLastWeek?consumedBy=Paul`
    )
      .then((res) => res.json())
      .then((totalData) => {
        this.setState({ totalUnitsLastWeek: totalData });
      })
      .catch(console.log);

    fetch(`${process.env.REACT_APP_BASE_URL}api/weeks/current`)
      .then((res) => res.json())
      .then((week) => {
        this.setState({ currentWeek: week });
      })
      .catch(console.log);

    fetch(`${process.env.REACT_APP_BASE_URL}api/weeks/previous`)
      .then((res) => res.json())
      .then((week) => {
        this.setState({ previousWeek: week });
      })
      .catch(console.log);

    fetch(
      `${process.env.REACT_APP_BASE_URL}api/drink/totalNumberOfDrinksThisWeek`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ totalNumberOfDrinksThisWeek: data });
      })
      .catch(console.log);

    fetch(
      `${process.env.REACT_APP_BASE_URL}api/drink/totalNumberOfDrinksLastWeek`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ totalNumberOfDrinksLastWeek: data });
      })
      .catch(console.log);
  }
}

export default App;
