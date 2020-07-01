import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        Hello from List <br />
        and it has <Item></Item> Inside
      </div>
    );
  }
}
