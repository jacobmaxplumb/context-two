import { useContext } from "react"
import { TodoContext } from "../App"

const TodoForm = () => {
    const context = useContext(TodoContext);

    const updateTodo = (e) => {
        context.setTodoState({
            ...context.todoState,
            todo: e.target.value
        })
    }

    const addTodo = () => {
        console.log(context.todo);
        context.setTodoState({
            ...context.todoState,
            todos: [...context.todoState.todos, context.todoState.todo],
            todo: ''
        })
    }

    return(
        <div>
            <input value={context.todoState.todo} onChange={updateTodo} />
            <button onClick={addTodo}>submit</button>
        </div>
    )
}

export default TodoForm;