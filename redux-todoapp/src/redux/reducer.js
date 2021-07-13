import { v4 as uuidv4 } from 'uuid';


const initialState= {
  tasks: [
    {
      id: uuidv4(),
      name: 'eat',
      status: 'pending'
    },
    {
      id: uuidv4(),
      name: 'code',
      status: 'pending'
    },
    {
      id: uuidv4(),
      name: 'sleep',
      status: 'done'
    },
  ],
   errorMessage: ''
}
///this is your app
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TASK':
      let tasksCopy = [...state.tasks, action.payload];

      return {
        ...state,
        tasks: tasksCopy
      };
      case 'DELETE_TASK':
        let updatedTasks = state.tasks.filter(
          task => task.id !== action.payload
        );
        return {
          ...state,
          tasks: updatedTasks
        };
       case 'TASK_COMPLETED':
        let tasksCompleted = [...state.tasks]
         tasksCompleted = tasksCompleted.map(task => {
          if(action.payload === task.name){
            task.status = 'done'
          }
          return task
        })
         return {
           ...state,
          tasks: tasksCompleted
         }
      default:
        return state;
  }
}

export default reducer