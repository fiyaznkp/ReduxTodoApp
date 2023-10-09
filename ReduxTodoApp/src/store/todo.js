import {createSlice} from "@reduxjs/toolkit"


export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        state.push({ id: Date.now(), text: action.payload, completed: false });
      },
      updateTodo: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      },
    },
})
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer