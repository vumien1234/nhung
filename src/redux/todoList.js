// // dùng useSelector, useDispatch từ redux để truy cập trạng thái 

// import {useDispatch,useSelector} from 'react-redux';
// import {addTodo,toggletodo,deletetodo} from './todoList';
// import { useState } from 'react';

// const TodoList = ()=>{
//     const todos = useSelector((state)=>state.todos)
//     const dispatch = useDispatch()
//     const [newTodoText, setNewTodoText] = useState('');
    
//     const handleAddTodo = ()=>{
//         const todo = {id : Date.now(),text : newTodoText,completed:false}
//         dispatch(addTodo(todo))
//         setNewTodoText('')
//     }
//     const handleToggleTodo = (id)=>{
//         dispatch(toggletodo(id))
//     }
//     const handleDeleteTodo = (id)=>{
//         dispatch(deletetodo(id))
//     }
//     return(
//         <div>
//             <input
//                 type="text"
//                 value={newTodoText}
//                 onChange={e => setNewTodoText(e.target.value)}
//             />
//             <button onClick={handleAddTodo}>Add Todo</button>
//             <ul>
//                 {todos.map(todo => (
//                 <li
//                     key={todo.id}
//                     onClick={() => handleToggleTodo(todo.id)}
//                     style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//                 >
//                     {todo.text}
//                     <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default TodoList;
