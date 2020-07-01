import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, handleEdit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo list item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3 px-5 mx-auto d-block text-uppercase"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
