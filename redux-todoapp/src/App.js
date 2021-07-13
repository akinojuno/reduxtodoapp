import './App.css';
import { connect } from 'react-redux';
import React from 'react';
import PendingTasks from './components/PendingTasks';
import AddTaskInput from './components/AddTaskInput';
import DoneTasks from './components/DoneTasks'

class App extends React.Component {
  render() {
    let pendingTasks = this.props.tasks.filter(task => task.status === 'pending')
    let doneTasks = this.props.tasks.filter(task => task.status === 'done')
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
           <h1> TO DO APP </h1>
              <AddTaskInput />
                <h2>Pending Tasks:</h2>
              <table>
                <tbody>
                  { 
                    pendingTasks.length > 0 ?
                      pendingTasks.map(task => (
                          <PendingTasks key={task.id} task={task} />
                        ))
                    : <h5>No Pending Tasks</h5>
                  }
                </tbody>
                  
              </table>
              <br />
                  <h2>Done Tasks:</h2>
              <table>
                <tbody>
                      {
                      doneTasks.length > 0 ?
                          doneTasks.map( task => (
                          <DoneTasks key={task.id} task={task} /> 
                          )) 
                    : <h5>No Done Tasks</h5>
                    }
                </tbody>
                  
              </table>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
