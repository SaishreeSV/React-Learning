import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Hello Sai! ❤️
  </h1>
);

const newVariable2 = (
  <span>
    This element is another react element put inside of React Element1
  </span>
);

// this react element put inside the component
const newVariable = (
  <h1>
    React Element1<br/>
    {newVariable2}
  </h1>
);

//JSX transpiled into Javascript (by babel package) here babel is installed by parcel
//JSX syntax is HTML and Javascript = attributes is camelCase
//JSX => Babel transpiles into React.createElement => React Ele/JS Object => HTML element by render

//React Components -> Class Based and Function Based(Latest one)
//component compsition: one component inside another omponent
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()} 
    {/* all 3 lines are the same. last line is calling a function inside component */}
    {newVariable}
    {2 * 2}
    <h1>Hey!This is a new Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
