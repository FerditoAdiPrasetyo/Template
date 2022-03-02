import { createSlice } from "@reduxjs/toolkit";
import { TodosData } from "./TableComponent";

export const todoSlice = createSlice({

    name: "todos",
    initialState: { value: TodosData },
    reducers: {

        addTodo: (state, action) => {

            state.value.push(action.payload);
        },


        deleteTodo: (state, action) => {

            state.value = state.value.filter(
                (todo) => todo.id !== action.payload.id
            );
        },


        updateTodo: (state, action) => {

            state.value.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.todo = action.payload.todo;
                }
            });
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
