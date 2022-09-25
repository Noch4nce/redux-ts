export interface ITodo {
	todos: any[]
	loading: boolean
	error: null | string
	page: number
	limit: number
	// id: number | null
	// title: string
	// completed: boolean
}

export enum TodoActionTypes {
	FETCH_ACTION = 'FETCH_ACTION',
	FETCH_ACTION_SUCCESS = 'FETCH_ACTION_SUCCESS',
	FETCH_ACTION_ERROR = 'FETCH_ACTION_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoAction {
	type: TodoActionTypes.FETCH_ACTION
}

interface FetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_ACTION_SUCCESS
	payload: any[]
}

interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_ACTION_ERROR
	payload: string
}

interface FetchSetTodoPageAction {
	type: TodoActionTypes.SET_TODO_PAGE
	payload: number
}

export type FieldTodoActionTypes =
	| FetchTodoAction
	| FetchTodoSuccessAction
	| FetchTodoErrorAction
	| FetchSetTodoPageAction
