import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Archit Goyal");
  
    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    );
  }
  
  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    const userCompo4 = useContext(UserContext);
    return (
      <>
        <h1>Component 4</h1>
        <h2>{`hello , I am form comp 4 , ${userCompo4}`}</h2>
        <Component5 />
      </>
    );
  }

  function Component5() {
    const user1 = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user1} again!`}</h2>
      </>
    );
  }

  export default Component1;