export const addTodo = (data) => {
    return {
        type: "addTodo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "deleteTodo",
        id
    }
}

export const removeAllTodo = () => {
    return {
        type: "removeAllTodo"
    }
}