import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState : [],
    reducers : {
        addTodo : (state,action) => {
            const newtodo = {
                id : Date.now(),
                text : action.payload,
                completed :false
            }
            return [...state,newtodo]
        },
        toggleComplete : (state,action) => {
            const todo = state.find((todo)=>todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo : (state,action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo,toggleComplete,deleteTodo} = todoSlice.actions
export default todoSlice.reducer