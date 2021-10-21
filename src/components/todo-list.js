import { useContext } from "react"
import { TodoContext } from "../App"

const TodoList = () => {
    const {todoState} = useContext(TodoContext);
    return(
        <div>
            <div>{todoState.todo}</div>
            {todoState.todos.map((todo, index) => (
                <div key={index}>{index + 1}. {todo}</div>
            ))}
        </div>
    )
}

export default TodoList;