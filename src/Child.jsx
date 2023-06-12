import React from "react";
import { useContext } from "react";
import { UserContext } from "./components/usecontext/userContext";


const Child = (props) => {
  const userData = useContext(UserContext);
  console.log(userData);
  return (
    <div>
      <h6>HI I am child component</h6>
      <h6>{"user name is " + userData }</h6>
    </div>
  )
};  

export default Child;
