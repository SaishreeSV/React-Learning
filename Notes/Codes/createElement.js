//nested objects using createElement
//Igniting our app

import React from "react";
import ReactDOM from "react-dom/client";
// react-dom/client is used from latest versions of react or else we'll get some error

//both react and reactDOM are different. React is a library whereas ReactDOM is only to maniplate data on the top end 


// structure: React.createElement("tag", {attributes}, children) If multiple children, use array of children
// this parent is a javascript object
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1Tag1" }, "Hello Sai! ❤️"),
    React.createElement("h2", { id: "h1Tag2" }, "How are you??"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1Tag1" }, "Hello Sai!"),
    React.createElement("h2", { id: "h1Tag2" }, "How are you?"),
  ]),
]);

// this is ReactDOM.createRoot because it deals with disaying on browser
//whatever is present in this id, all the code will be replaced by our react code from here
const root = ReactDOM.createRoot(document.getElementById("root"));

//render is the most used method of ReactDOM
//when we render our objcet into DOM, it becomes an HTML. till now it will be an object itself. try console.log and check
root.render(parent);
