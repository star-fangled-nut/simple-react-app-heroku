import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

const ContentDiv = styled.div`
  flex-grow: 1;
  text-align: left;
  text-justify: auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;


const Home = ({currentWeek, totalUnitsThisWeek, totalNumberOfDrinksThisWeek, previousWeek, totalUnitsLastWeek, totalNumberOfDrinksLastWeek }) => {
    return (
        <ContentDiv>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan="2">
                  Current Week
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Start Date</td>
                <td>{currentWeek.startDate}</td>
              </tr>
              <tr>
                <td>End Date</td>
                <td>{currentWeek.endDate}</td>
              </tr>
              <tr>
                <td>Units</td>
                <td>{totalUnitsThisWeek}</td>
              </tr>
            <tr>
                <td>Number of drinks</td>
                <td>{totalNumberOfDrinksThisWeek}</td>
            </tr>
              </tbody>
          </Table>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan="2">
                  Previous Week
                </th>
              </tr>
            </thead>
              <tbody>
              <tr>
                  <td>Start Date</td>
                  <td>{previousWeek.startDate}</td>
              </tr>
              <tr>
                  <td>End Date</td>
                  <td>{previousWeek.endDate}</td>
              </tr>
              <tr>
                  <td>Units</td>
                  <td>{totalUnitsLastWeek}</td>
              </tr>
              <tr>
                  <td>Number of drinks</td>
                  <td>{totalNumberOfDrinksLastWeek}</td>
              </tr>
              </tbody>
          </Table>
        </ContentDiv>
    );
};

export default Home;