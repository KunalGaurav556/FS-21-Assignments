import { act, useReducer } from "react";
import Employees from "./components/Employees";
import Team from "./components/Team";
import { employees } from "./data/employees";

function App() {
  const initialData = {
    employeesList: employees,
    teamList: [],
    averageAge: 0,
  };

  const [state, dispatch] = useReducer(reducerFn, initialData);

  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          employeesList: state.employeesList.filter(
            (item) => item.id != action.payload.id
          ),
          teamList: [...state.teamList, action.payload],
        };
      case "REMOVE":
        return {
          ...state,
          employeesList: [action.payload, ...state.employeesList],
          teamList: state.teamList.filter(
            (item) => item.id != action.payload.id
          ),
        };
      case "CALCULATE_AVG":
        return {
          ...state,
          averageAge:
            state.teamList.length > 0
              ? (
                  state.teamList.reduce((acc, item) => acc + item.age, 0) /
                  state.teamList.length
                ).toFixed(2)
              : 0,
        };
      case "SORT":
        return {
          ...state,
          teamList:
            state.teamList.length > 1
              ? state.teamList.sort((a, b) => a.age - b.age)
              : state.teamList,
        };
      default:
        return state;
    }
  }
  console.log(state);

  return (
    <>
      <Employees employees={state.employeesList} dispatch={dispatch} />
      <Team
        team={state.teamList}
        averageAge={state.averageAge}
        dispatch={dispatch}
      />
    </>
  );
}

export default App;
