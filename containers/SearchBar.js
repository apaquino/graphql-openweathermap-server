import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ""
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }; // ";" required for class property

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
