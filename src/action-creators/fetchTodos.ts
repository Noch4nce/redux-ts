import { FieldTodoActionTypes, TodoActionTypes } from '../types/todoTypes'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<FieldTodoActionTypes>) => {
		try {
			dispatch({ type: TodoActionTypes.FETCH_ACTION })
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/todos`,
				{
					params: {
						_page: page,
						_limit: limit
					}
				}
			)
			dispatch({
				type: TodoActionTypes.FETCH_ACTION_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: TodoActionTypes.FETCH_ACTION_ERROR,
				payload: 'Fetch todo error'
			})
		}
	}
}

export const setTodoPage = (page: number): FieldTodoActionTypes => {
	return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}
