import React, { Component } from "react";
import "./Proposals.css";
class Proposals extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    let proposal;

    return (
      <div className="proposals">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Available Proposals</h2>
            {/* Below are hard coded. Replace with props with linked with BE */}
            <h5 className="card-subtitle mb-2">
              Here's a list of recentely posted Jobs{" "}
            </h5>
            <p className="card-text">Use keywords to refine your search</p>
            <form className="search">
              <input
                placeholder="Search for..."
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
              <button className="search btn btn-primary">Search</button>
              <p>{this.state.query}</p>
            </form>
            <hr />
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  {proposal}
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <button id="apply-btn" type="submit" className="btn-success">
                    Apply
                  </button>
                  <button id="save-btn" className="btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                {proposal}
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <button id="apply-btn" type="submit" className="btn-success">
                  Apply
                </button>
                <button id="save-btn" className="btn-primary">
                  Save
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                {proposal}
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <button id="apply-btn" type="submit" className="btn-success">
                  Apply
                </button>
                <button id="save-btn" className="btn-primary">
                  Save
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                {proposal}
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <button id="apply-btn" type="submit" className="btn-success">
                  Apply
                </button>
                <button id="save-btn" className="btn-primary">
                  Save
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                {proposal}
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <button id="apply-btn" type="submit" className="btn-success">
                  Apply
                </button>
                <button id="save-btn" className="btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proposals;
