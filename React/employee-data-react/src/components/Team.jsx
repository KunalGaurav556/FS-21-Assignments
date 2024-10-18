import React from "react";

const Team = ({ team, averageAge, dispatch }) => {
  const handleDispatch = (emp) => {
    dispatch({ type: "REMOVE", payload: emp });
    dispatch({ type: "CALCULATE_AVG", payload: emp });
  };
  return (
    <div className='team-container'>
      <h2>Team</h2>
      <div className='sort-container'>
        <button onClick={() => dispatch({ type: "SORT", payload: {} })}>
          SORT BY AGE
        </button>
      </div>
      {team.map((emp) => (
        <div className='item' key={`team-${emp.id}`}>
          <p>{emp.first_name}</p>
          <p>{emp.age}</p>
          <button onClick={() => handleDispatch(emp)}>REMOVE</button>
        </div>
      ))}
      <div className='item avg-item'>
        <p>Average Age</p>
        <p>{averageAge}</p>
      </div>
    </div>
  );
};

export default Team;
