import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CurrentWeek from "./components/currentWeek";
import Home from "./components/home";
import AddDrink from "./components/addDrink";
import styled from "styled-components";

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
                  total={this.state.total}
                />
              </Route>
            </Switch>
            <Switch>
              <Route path="/currentWeek">
                <CurrentWeek drinks={this.state.drinks} />
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
    drinks: [],
    total: [],
    currentWeek: [],
  };

  componentDidMount() {
    fetch("https://immense-lowlands-99162.herokuapp.com/api/drinksThisWeek")
      .then((res) => res.json())
      .then((drinksData) => {
        this.setState({ drinks: drinksData });
      })
      .catch(console.log);

    fetch("https://immense-lowlands-99162.herokuapp.com/api/totalUnitsThisWeek")
      .then((res) => res.json())
      .then((totalData) => {
        this.setState({ total: totalData });
      })
      .catch(console.log);

    fetch("https://immense-lowlands-99162.herokuapp.com/api/currentWeek")
      .then((res) => res.json())
      .then((week) => {
        this.setState({ currentWeek: week });
      })
      .catch(console.log);
  }
}

export default App;
