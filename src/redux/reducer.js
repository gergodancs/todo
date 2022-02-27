import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    todos: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

    addTodos: (state, action) => {
      state.todos.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return {
        user: state.user,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },
    updateTodos: (state, action) => {
      return {
        user: state.user,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              item: action.payload.item,
            };
          }
          return todo;
        }),
      };
    },
    completeTodos: (state, action) => {
      return {
        user: state.user,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      };
    },
  },
});

export const {
  login,
  logout,
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = userSlice.actions;
export const selectUser = (state) => state.user;

//export const reducer = addTodoReducer.reducer;
export default userSlice.reducer;
