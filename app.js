const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1Tag1" }, "Hello Sai!"),
    React.createElement("h2", { id: "h1Tag2" }, "How are you?"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1Tag1" }, "Hello Sai!"),
    React.createElement("h2", { id: "h1Tag2" }, "How are you?"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
