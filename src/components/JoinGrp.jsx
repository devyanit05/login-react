import React, { Component } from "react";

export default class JoinGrp extends Component {
  render() {
    return (
      <form>
        <h3>Join Group</h3>
        <div className="mb-3">
          <label>Group Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Group Name"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-in">Sign In</a>
        </p>
      </form>
    );
  }
}
