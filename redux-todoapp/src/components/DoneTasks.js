import React from 'react';
import { connect } from 'react-redux';

class TaskRow extends React.Component {

  render() {
    return(
      <tr>
        <td>
          <span>{this.props.task.name}</span>
          <button onClick = {()=> this.props.deleteTask(this.props.task.id)}>❌</button>
        </td>
        
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    deleteTask: id => dispatch({type: 'DELETE_TASK', payload: id}),
  };
};


export default connect(null, mapDispatchToProps)(TaskRow);