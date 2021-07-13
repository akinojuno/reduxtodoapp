import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './AddTaskInput.css';

const AddTaskInput = ({tasks, addTask}) => {

  const [newTask, setNewTask] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const addTaskInputChangeHandler = (event) => {
    setNewTask(event.target.value);
  }

  const addTaskBtn = () => {
    if(newTask.trim() === '') {
      setErrorMessage('*this field cannot be blank')
       } else if( tasks.filter( task => task.name.toLowerCase() === newTask.toLowerCase() ).length > 0 ) {
           setErrorMessage('*task name already exists')
       } else {            
          let newTaskObject = {
              id: uuidv4(),
              name: newTask,
              status: 'pending'
             }
          addTask(newTaskObject);
          setErrorMessage('');    
        }
    setNewTask('');
};  
    return(
      <div>
        <div className="inputContainer">
          <input type="text" value={newTask} onChange={addTaskInputChangeHandler}/>
          <button className="addTaskBtn" onClick={addTaskBtn}>Add Task</button>
        </div>
          <p><small>{errorMessage}</small></p>
      </div>
      
    );
  }


const mapStateToProps = ({tasks}) => {
  return {
    tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTask => dispatch ({
      type:'ADD_TASK', payload: newTask
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddTaskInput);