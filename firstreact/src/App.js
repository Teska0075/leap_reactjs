import logo from "./logo.svg";
import "./App.scss";

import Home from "./components/pages/home/Home";
import Detail from "./components/pages/detail/Detail";
import Btn from "./components/main";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// const btns = [
//   {
//     title: "Add",
//     variant: "primary",
//   },
//   {
//     title: "Minus",
//     variant: "secondary",
//   },
// ];

// const [count, setCount] = useState(0);

//   const handleClick = (title) => {
//     if (title === "Add") {
//       setCount(count + 1);
//     } else {
//       setCount(count - 1);
//     }
//   };

{
  /* <h1>Counter: {count}</h1>
      {btns.map((btn) => (
        <Btn
          title={btn.title}
          variant={btn.variant}
          handleClick={handleClick}
        />
      ))} */
}
