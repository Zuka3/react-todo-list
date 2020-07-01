import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/TodoInput";
import List from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "dress up" },
      { id: 3, title: "Eat" },
    ],
    id: uuid(),
    item: "",
    itemEdit: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        itemEdit: false,
      },
      () => console.log(this.state)
    );
  };
  clearList = (e) => {
    console.log("Clear");
  };
  handleDelete = (title) => {
    console.log(`Delete item: ${title}`);
  };
  handleEdit = (title) => {
    console.log(`Edit item: ${title}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto bg-success mt-4">
            <h3 className="text-center text-capitalize">todo input</h3>
            <Input
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
            />
            <List
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
