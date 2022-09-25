import React, { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useAppDispatch'

const TodoList: FC = () => {
	const { todos, error, loading, limit, page } = useTypedSelector(
		(state) => state.todo
	)
	const { fetchTodos, setTodoPage } = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.id} - {todo.title}
				</div>
			))}
			<div style={{ display: 'flex' }}>
				{pages.map((elPage) => (
					<div
						key={elPage}
						onClick={() => setTodoPage(elPage)}
						style={{
							border:
								elPage === page
									? '1px solid green'
									: '1px solid grey',
							padding: 10
						}}
					>
						{elPage}
					</div>
				))}
			</div>
		</div>
	)
}

export default TodoList
