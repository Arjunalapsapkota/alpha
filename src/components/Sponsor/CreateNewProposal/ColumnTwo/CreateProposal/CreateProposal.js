import React, { Component } from "react";

class CreateProposal extends Component {
  // onChange function here

  // Submit function here

  render() {
    return (
      <div className="container-fluid">
        <h1>Create New Proposal</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="proposalTitle">Proposal Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="proposalTitle"
                  placeholder="Proposal Title"
                />
              </div>
              <div className="form-group">
                <label for="proposalTitle">Proposal Bid ( $ )</label>
                <input
                  type="text"
                  className="form-control"
                  id="proposalTitle"
                  placeholder="Proposal Title"
                />
              </div>
              <div class="form-group">
                <label for="Proposal Details">Proposal Details</label>
                <textarea class="form-control" id="proposalDetails" rows="10" />
              </div>
              <button type="submit" class="btn btn-ds-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProposal;
