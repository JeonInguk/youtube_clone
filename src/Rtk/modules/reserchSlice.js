import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
	todos: [],
	todo: [{ id: "0", title: "", text: "", check: false }],
	isLoading: false,
	error: null,
};

// thunk 이용
export const __getTodo = createAsyncThunk(
	"todo/getTodo",
	async (payload, thunkAPI) => {
		try {
			const data = await axios.get("http://localhost:3001/todo");
			return thunkAPI.fulfillWithValue(data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

// redux toolkit 적용한 reducer
const TodoSlice = createSlice({
	name: "todos", // 이 모듈의 이름
	initialState,
	reducers: {
		switchTodo: (state, action) => {
			state.todo = state.todo.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						check: !todo.check,
					};
				}
				return {
					...todo,
				};
			});
		},
	},
	// extraReducers(비동기를 위한 reducer)
	extraReducers: {
		[__getTodo.pending]: (state) => {
			state.isLoading = true;
		},
	},
});

// export default reducer
export const { switchTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
