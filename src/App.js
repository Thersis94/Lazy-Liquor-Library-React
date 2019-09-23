import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Component/Header/Header";
import { Form } from "./Component/Form/Form";
import ingArray from './STORE/IngListArray';
import IngList from'./Component/IngList/IngList';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      ingList: ingArray
    }
  }

  


  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={Form} />
        {/* <Route path='/search-results' component={SearchResults} /> */}
    <Route path='/ing-list' render={(props) => <IngList {...props} ingArray={this.store.ingList} />}  />
      </div>
    );
  }
}

export default App;
