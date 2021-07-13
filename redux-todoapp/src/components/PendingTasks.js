import React from 'react';
import { connect } from 'react-redux';
import './DoneDeleteBtn.css'

class PendingTasks extends React.Component {

  
//   editToDo = (id) => {
//     let editedTask= this.props.tasks.map(task => {
//         if (task.id === id) {
//             return {
//                 ...task,
//                 status: 'Done'
//             }
//         }
//         return task;
//     })
//     this.props.editTask(editedTask);
// }

  render() {
    return(
      <tr>
        <td>
          <span>{this.props.task.name}</span>
          {/* <button onClick={ () => this.editTask(this.props.task.id)} >📝</button> */}
          <button onClick={ ()=> this.props.taskCompleted(this.props.task.name) }>✔️</button>
          <button onClick={ ()=> this.props.deleteTask(this.props.task.id) }>❌</button>
        </td>

      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}


const mapDispatchToProps = dispatch => {
  return{
    editTask: editedTask => dispatch({type: 'EDIT_TODO', payload: editedTask}),
    deleteTask: id => dispatch({type: 'DELETE_TASK', payload: id}),
    taskCompleted: name => dispatch({type:'TASK_COMPLETED', payload: name})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PendingTasks);