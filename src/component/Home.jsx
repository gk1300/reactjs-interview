import React, { useState } from "react";

const Home = (props) => {
  console.log(props.history.location.newData);

  let testData = props.history.location.newData ? props.history.location.newData : [
    {
      id: 1,
      fname: "Gaurav",
      lName: "khandelwal",
      dob: "2022/01/01",
      designation: "engineer",
      pLink: "xyz",
      experience: "software",
    },
    {
      id: 2,
      fname: "Ram",
      lName: "Sharma",
      dob: "2022/01/01",
      designation: "doctor",
      pLink: "xyz",
      experience: "lungs",
    },
    {
      id: 3,
      fname: "Karan",
      lName: "Sharma",
      dob: "2022/01/01",
      designation: "doctor",
      pLink: "xyz",
      experience: "lungs",
    },
  ];
  const [employeeData, setEmployeeData] = useState([...testData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>dob</th>
            <th>Designation</th>
            <th>profile Link</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.fname}</td>
              <td>{employee.lName}</td>
              <td>{employee.dob}</td>
              <td>{employee.designation}</td>
              <td>{employee.pLink}</td>
              <td>{employee.experience}</td>
              <td>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    props.history.push({
                      pathname: "/edit",
                      eId : employee.id,
                      employeeData
                    });
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    let newEmpData = [];
                    for (let obj of employeeData) {
                      if (obj.id !== employee.id) {
                        newEmpData.push(obj);
                      }
                    }
                    setEmployeeData(() => {
                      return [...newEmpData];
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        style={{ float: "right", marginTop: "5px" }}
        onClick={() => {
          props.history.push({
            pathname: "/addEmployee",
            employeeData
          });
        }}
      >
        Add New Employee
      </button>
    </div>
  );
};

export default Home;
