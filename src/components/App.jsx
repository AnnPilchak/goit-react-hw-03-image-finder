import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import {Container} from "./App.styled"

class App extends Component {
  state = {
    query: '',
  };

  getSearchQuery = newSearchQuery =>
    this.setState({
      query: newSearchQuery,
    });

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.getSearchQuery} />
        <ImageGallery searchQuery={this.state.query} />
      </Container>
    );
  }
}

export default App;