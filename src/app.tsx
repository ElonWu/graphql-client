import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./views/home/home";
import "./app.scss";
import "antd/dist/antd.css";

import { ApolloProvider } from "react-apollo";
import { client } from "api/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
