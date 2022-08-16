import React, { useState } from "react";

const AddEmployee = (props) => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [pLink, setPlink] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    let tempData = props.history.location.employeeData;

    e.preventDefault();
    let empObj = {
      id: tempData.length + 1,
      fname : fName,
      lName,
      dob,
      designation,
      pLink,
      experience,
    };
    tempData.push(empObj);
    props.history.push({pathname: '/home', newData:tempData})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>{" "}
          <input
            type="text"
            value={fName}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lName}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div>
          <label>DOB</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Profile</label>
          <input
            type="text"
            value={pLink}
            onChange={(e) => {
              setPlink(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Experience</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
