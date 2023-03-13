import axios from "axios";

const SERVER_URI = "http://localhost:4000";

const getTodos = async () => {
    const response = await axios.get(`${SERVER_URI}/todos`);
    return response.data;
};

const switchTodo = async (payload) => {
    await axios.patch(`${SERVER_URI}/todos/${payload.id}`, {
        isDone: payload.isDone,
    });
};

export { getTodos, switchTodo };
