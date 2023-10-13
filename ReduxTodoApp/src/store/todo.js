import {createSlice} from "@reduxjs/toolkit"


export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        state.push({ id: Date.now(), text: action.payload });
      },
      updateTodo: (state, action) => {
        const todo = state.find((e) => e.id === action.payload.id);
        if (todo) {
          todo.text = action.payload.text;
        }
      },
      deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      },
    },
})
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer