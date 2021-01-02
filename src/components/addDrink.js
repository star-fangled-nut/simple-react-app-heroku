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
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  submitDrink(event) {
    event.preventDefault();

    let drink = {
      units: this.textInput.current.value,
    };

    fetch("http://localhost:5000/api/addDrink", {
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
        <Form onSubmit={this.submitDrink.bind(this)}>
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
      </ContentDiv>
    );
  }
}
