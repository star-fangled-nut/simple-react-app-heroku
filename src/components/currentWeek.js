import React from "react";
import Table from "react-bootstrap/Table";

const CurrentWeek = ({ drinks }) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((details) => (
            <tr key={details.id}>
              <td>{details.id}</td>
              <td>{details.date}</td>
              <td>{details.units}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CurrentWeek;
