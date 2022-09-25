import {
	FieldTodoActionTypes,
	ITodo,
	TodoActionTypes
} from '../../types/todoTypes'

const initialState: ITodo = {
	todos: [],
	loading: false,
	error: null,
	limit: 10,
	page: 1
}

export const todoReducer = (
	state = initialState,
	action: FieldTodoActionTypes
): ITodo => {
	switch (action.type) {
		case TodoActionTypes.FETCH_ACTION:
			return { ...state, loading: true }
		case TodoActionTypes.FETCH_ACTION_SUCCESS:
			return { ...state, loading: false, todos: action.payload }
		case TodoActionTypes.FETCH_ACTION_ERROR:
			return { ...state, loading: false, error: action.payload }
		case TodoActionTypes.SET_TODO_PAGE:
			return { ...state, page: action.payload }
		default:
			return state
	}
}
