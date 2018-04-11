import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <input type="button" value="Delete" />
        <span>{ this.props.description }</span>

      </li>
//create a checkbox input type and render the isCompleted prop as the value of the checked property with a type attribute of checkbox.
// Added an event listener called onChange that will call the anonymous function this.toggleComplete and pass it to the index. We are passing a function as a prop.

//In the toDo component, we access the props frpm the App component by using the this.props object. We render the description prop in our ToDo component.
    );
  }
}

export default ToDo;
