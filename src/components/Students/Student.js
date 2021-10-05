import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Student = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center pt-5 pb-5">Students List</h1>
      <div className="container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>CSE</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>SWE</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>ME</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default Student;
