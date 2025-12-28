import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
	const sortedTodos = todos
		.slice()
		.sort((a, b) => Number(a.done) - Number(b.done));
	if (todos.length === 0) {
		return (
			<p className={styles.empty}>
				No tasks available. Please add a task.
				<br />
				To mark task as completed, click on the task.
			</p>
		);
	}
	return (
		<div className={styles.list}>
			{sortedTodos.map((item) => (
				<TodoItem
					item={item}
					key={item.name}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	);
}
