import React, { useState } from "react";

const AddEmployee = (props) => {
    console.log(props.history.location.employeeData);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  return (
    <div>
      <form>
        First Name : <input type="text" value={fName} onChange={(e) => {
            setFname(e.target.value);
        }}/>
        Last Name : <input type="text" value={lName} onChange= {e => {
            setLname(e.target.value)
        }}/>
      </form>
    </div>
  );
};

export default AddEmployee;
