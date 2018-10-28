import React, { Component } from "react";

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
    return (
      <div className="proposals">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Proposals Posted</h2>
            {/* Below are hard coded. Replace with props with linked with BE */}
            <h5 className="card-subtitle mb-2">
              Here's a list of jobs you posted
            </h5>
            <p className="card-text">Use keywords to refine your search</p>
            <form className="search">
              <input
                placeholder="Search for..."
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
              <button className="search btn btn-success">Search</button>
              <p>{this.state.query}</p>
            </form>
            <hr />
            <table />
          </div>
        </div>
      </div>
    );
  }
}

export default Proposals;
