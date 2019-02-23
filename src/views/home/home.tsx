import React from "react";
import "./home.scss";
import BookList from "components/BookList/BookList";

export class Home extends React.Component {
  render() {
    return (
      <div
        className="bg"
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <h3>Elon's World</h3>
        <BookList />
      </div>
    );
  }
}
