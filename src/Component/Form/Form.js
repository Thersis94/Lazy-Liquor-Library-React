import React from "react";
import { DrinkHighlighters } from "./DrinkHighlighters/DrinkHighlighters";
import { Link } from "react-router-dom";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      Highlighted: []
    };
  }

  setSearchBarInput(e) {
    this.setState({
      searchInput: e.currentTarget.value
    });
    
  }

  setHighlighted(e) {
    console.log(e);
  }

  submitSearch(e) {
    e.preventDefault()
    console.log(this.state.searchInput)
  }

  render() {
    return (
      <div>
        <fieldset className="fieldset">
          <legend>Filter By</legend>
          <form>
            <div className="search-bar">
              <label className="search-label">
                Enter the ingredients that you have separated by a comma or
                select from some popular liqours below.
              </label>
              <div className="search-bar-wrap">
                <div className="search">
                  <input
                    className="search-input"
                    id="user-input"
                    type="text"
                    onChange={e => {
                      this.setSearchBarInput(e);
                    }}
                  />
                  <input
                    className="search-button"
                    type="submit"
                    value="Search"
                    onClick={e => {
                      this.submitSearch(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <DrinkHighlighters />
            <div className="display-ing-list">
              <Link to="/ing-list">
                <button type="button" id="ing-list-button">
                  List of ingredients
                </button>
              </Link>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}