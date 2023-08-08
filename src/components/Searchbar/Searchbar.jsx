import { Component } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { Header, Form, Button, Input } from "./Searchbar.styled"

import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = { 
    onSubmit: PropTypes.func.isRequired
  };

  handleSubmit = evt => {
      evt.preventDefault();
      const query = evt.target.query.value;
      if (query.trim() !== '') {
        return this.props.onSubmit(evt.target.query.value);
      }
      evt.target.reset();
    };
    
  render() {
    const { handleSubmit } = this;
      
    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <BiSearchAlt />
          </Button>

          <Input
            name="query"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    )
  }
}
export default Searchbar;