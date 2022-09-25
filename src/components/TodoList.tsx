import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useAppDispatch'

const TodoList = () => {
	const { todos, error, loading } = useTypedSelector((state) => state.todo)
	const {} = useActions()

	useEffect(() => {
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{todos.map((todo) => (
				<div>
					{todo.id} - {todo.title}
				</div>
			))}
		</div>
	)
}

export default TodoList
