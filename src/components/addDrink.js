import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const ContentDiv = styled.div`
  flex-grow: 1;
  text-align: left;
  text-justify: auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default class AddDrink extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.volume = React.createRef();
    this.abv = React.createRef();
  }

  state = {
    show: false,
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  submitUnitsCalculation(event) {
    event.preventDefault();

    let drink = {
      volume: this.volume.current.value,
      abv: this.abv.current.value,
    };

    fetch(`${process.env.REACT_APP_BASE_URL}api/drinks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(drink),
    }).then((response) => response.json());

    window.location.reload();
  }

  submitUnits(event) {
    event.preventDefault();

    let drink = {
      units: this.textInput.current.value,
    };

    fetch(`${process.env.REACT_APP_BASE_URL}api/drinks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(drink),
    }).then((response) => response.json());

    window.location.reload();
  }

  render() {
    return (
      <ContentDiv>
        <Form.Check
          size="lg"
          type="switch"
          id="custom-switch"
          label="Units Unknown"
          onClick={this.toggle}
        />
        {this.state.show ? (
          <Form onSubmit={this.submitUnitsCalculation.bind(this)}>
            <InputGroup className="mb-3" size="lg">
              <FormControl
                ref={this.volume}
                type="text"
                onClick={this.focusTextInput}
              />
              <FormControl
                ref={this.abv}
                type="text"
                onClick={this.focusTextInput}
              />
              <InputGroup.Append>
                <InputGroup.Text>Volume(ml) and %</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <ContentDiv>
              <Button block type="submit" name="action">
                Submit
              </Button>
            </ContentDiv>
          </Form>
        ) : (
          <Form onSubmit={this.submitUnits.bind(this)}>
            <InputGroup size="lg">
              <FormControl
                ref={this.textInput}
                type="text"
                onClick={this.focusTextInput}
              />
              <InputGroup.Append>
                <InputGroup.Text>Units</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <ContentDiv>
              <Button block type="submit" name="action">
                Submit
              </Button>
            </ContentDiv>
          </Form>
        )}
      </ContentDiv>
    );
  }
}
