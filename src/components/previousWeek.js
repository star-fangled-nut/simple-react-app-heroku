import React from "react";
import Table from "react-bootstrap/Table";

const PreviousWeek = ({ drinks }) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Drink</th>
            <th>Date</th>
            <th>ABV</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((details) => (
            <tr key={details.id}>
              <td>{details.beerName}</td>
              <td>{details.dateConsumed}</td>
              <td>{details.abv}</td>
              <td>{details.units}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PreviousWeek;
