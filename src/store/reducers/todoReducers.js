const initialData = {
    todoList: [],
    data: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'addTodo': {
            const { id, data } = action.payload;
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        }
        case 'deleteTodo': {
            const filterdata = state.todoList.filter((items) => items.id !== action.id)
            return {
                ...state,
                todoList: filterdata
            }
        }

        case 'removeAllTodo': {
            return {
                ...state,
                todoList: []
            }
        }

        default: return state;
    }
}

export default todoReducers;