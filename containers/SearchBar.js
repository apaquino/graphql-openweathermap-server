import React, { Component, PropTypes } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state =
      { term: ""
      };
  }

  static propTypes =
    { fetchWeather: PropTypes.func
    , isLoading: PropTypes.bool
    };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
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
          <button type="submit" className="btn btn-primary">
            {this.props.isLoading ? "Searching ..." : "Search" }
          </button>
        </span>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { isLoading: state.weather.isLoading }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
