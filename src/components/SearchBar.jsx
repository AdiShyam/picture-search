import React from "react";

class SearchBar extends React.Component {
  // constructor() {
  //     super();
  //     this.state = { term: "" };
  //     this.onFormSubmit = this.onFormSubmit.bind(this)
  //     this.onInputChange = this.onInputChange.bind(this)
  // }
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="filed">
            <label>Image Search</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
