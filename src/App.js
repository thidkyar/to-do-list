import React, { Component } from "react";
import './App.css';

//components
import Task from './Components/Task/Task.jsx'
import List from './Components/To-Do-List/List.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          task: 'walk the dog',
          description: 'take the dog to the park',
          status: 'Pending',
          date: "2019-04-20"
        },
        {
          id: 2,
          task: 'test task #2',
          description: 'description of second task',
          status: 'Pending',
          date: "2019-04-20"
        }
      ]
    };
  }
  _handleSubmit = e =>{
    e.preventDefault()
    let items = this.state.items
      let item = {
        id: items.length + 1,
        task: e.target.task.value,
        date: e.target.date.value,
        description: e.target.description.value,
        status: 'Pending'
      }
        items.push(item)
        this.setState({
          items: items
        })
  }
  _handleStatus = e => {
    let items = this.state.items
    items.forEach(item => {
      if (parseInt(item.id) === parseInt(e.target.id) && item.status === 'Pending') {
        item.status = 'Complete'
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}> To Do List</h1>
        <Task items={this._handleSubmit} />
        <List items={this.state.items} status={this._handleStatus}/>
      </div>
    );
  }
}
export default App;
