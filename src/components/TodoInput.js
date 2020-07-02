import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, itemEdit } = this.props;
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
            disabled={item !== "" ? false : true}
            className={
              itemEdit
                ? "btn btn-success mt-3 px-5 mx-auto d-block text-uppercase"
                : "btn btn-primary mt-3 px-5 mx-auto d-block text-uppercase"
            }
          >
            {itemEdit ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
