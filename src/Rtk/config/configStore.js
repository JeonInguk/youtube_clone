import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules";

const store = configureStore({
    reducer: { todos },
});

export default store;
