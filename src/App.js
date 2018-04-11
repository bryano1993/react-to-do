import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: true },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }
//defining the initial state of the component. Component constructors must always accept props as a parameter and call super(props)
//initial state of the component is assigned using this keyword
// To create a new to-do, to know what the user wants call it. The standard approach to using values from text inputs is to store value in state. 14.



// a method that will accept the e variable and set the state of  newToDoDescription to e.target.value. e.target is the target element, the text input.
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }



  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
//will prevent users from creating empty to-do items
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }
// Call e.preventDefault() to prevent the default page reload on form submit
// On submit, we want a new to-do item to be added to this.state.todos. We'll create a new todo object and use this.setState() to add it to this.state.todos.
// To ensure that we don't directly mutate state, we'll use the JavaScript spread syntax to pass setState a new array, with our new todo object added to the end of it.





//an event handler. goal is to toggle the isCompleted property back and forth between true and false
// To do this it will have to modify the App component's state.
// We update state using setState
//To modify an array item without modifying the state object, first make a copy of the array using the .slice() array method. Then you can modify the array and use  this.setState() to update the component's state.
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
   }


//    deleteTodo(index) {
//      const
//      this.setState({})

//      const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

// let longWords = words.filter(word => { return word });


//    }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
//Use  the .map() array method to display the contents of an array in a React template. We will use it to convert raw data into an array of JSX elements that React will render into HTML
//Use key attribute on ToDo and assign it index. For React to operate properly, each child of an array or iterator needs to have a key with a unique value. The key gives React a reliable way of distinguishing between array items.
//Using props to pass data because state is encapsulted within a componenet, the ToDo componenet has no knowledge of the App component state.
//We pass down the description and isCompleted properties of each array item as a prop to the ToDo component.
// We pass toggleComplete as a prop and wrap it into an anonymous function. This allows us to pass the handler the to-do's index. We'll use the index to modify the appropriate to-do. W
//We use index to modify the appropriate to-do
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
       
// To allow users to create new to-do items, we create a form with a text input and submit button.
// the onsubmit attribute will respond to form submissions from a user. Accepts e as a parameter. E stands for event and it contains event data passed to the function by the browser and calls this.handleSubmit passing it e.
// Use arrow function to preserve value of this.
// set the value of the text into to this.state.newTodoDescription from the state
// Added an onChange event listener to change value of the state because without it the value of the input would be bound to this.state.newTodoDescription and nothing would happen when you type in text.
// Will be an arrow function that takes in e and calls this.handleChange passing it the e parameter.

    );
  }
}

export default App;



