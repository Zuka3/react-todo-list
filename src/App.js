import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/TodoInput";
import List from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 bg-success">
            <Input></Input>
          </div>
          <div className="col-4 bg-warning">
            <List></List>
          </div>
          <div className="col-4 bg-primary"></div>
        </div>
      </div>
    );
  }
}
