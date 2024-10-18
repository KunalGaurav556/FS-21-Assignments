import React from "react";

const Employees = ({ employees, dispatch }) => {
  const handleDispatch = (emp) => {
    dispatch({ type: "ADD", payload: emp });
    dispatch({ type: "CALCULATE_AVG", payload: emp });
  };
  return (
    <div className='employees-container'>
      <h2>Employees</h2>
      {employees.map((emp) => (
        <div className='item' key={`emp-${emp.id}`}>
          <p>{emp.first_name}</p>
          <p>{emp.age}</p>
          <button onClick={() => handleDispatch(emp)}>ADD</button>
        </div>
      ))}
    </div>
  );
};

export default Employees;
