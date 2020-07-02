import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between align-items-center">
        <h6 className="mb-0">{title}</h6>

        <div>
          <button className="btn btn-success mr-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}
