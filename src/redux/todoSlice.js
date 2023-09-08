// // tạo slice để quản lý trạng thái của bài toán
// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice = createSlice({
//     name:'todo',
//     initialState:[],
//     reducers:{
//         // sự kiện add
//         addTodo : (state,action)=>{
//             state.push(action.payload)
//         },
//         // toggle : đánh dấu công việc đã hoàn thành hay chưa
//         toggletodo : (state,action)=>{
//             const todo = state.find(todo => todo.id === action.payload);
//             // kiểm tra xem biến todo có tồn tại hay không
//             if(todo){
//                 todo.completed = !todo.completed;
//             }
//         },
//         deletetodo:(state,action)=>{
//             const index = state.findIndex(todo => todo.id === action.payload)
//             if(index !== -1){
//                 state.splice(index,1)
//             }
//         }
//     }
// })
// export const {addTodo,toggletodo,deletetodo} = todoSlice.actions;
// export default todoSlice.reducer;

// tạo file slice để quản lý trạng thai của bài toán
// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice = createSlice({
//     name:'todo',
//     initialState:[],
//     reducers:{
//         addTodo : (state,action)=>{
//             state.push(action.payload)
//         },
//         // toggleTodo để đánh dâu sự kiện khi hoàn thành và đánh dấu sự kiện
//         // chưa hoàn thành bằng cách gạch chéo chữ
//         toogleTodo:(state,action)=>{
//             const todo = state.find(todo => todo.id === action.payload)
//             if(todo){
//                 todo.completed = !todo.completed
//             }
//         },
//         removeTodo:(state,action)=>{
//             const index = state.findIndex(todo => todo.id === action.payload)
//             if(index !== -1){
//                 state.splice(index,1)
//             }
//         }
//     }
// })
// export const {addTodo,toogleTodo,removeTodo} = todoSlice.actions;
// export default todoSlice.reducer;