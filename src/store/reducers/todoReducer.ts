import { ITodo } from '../../types/todoTypes'

const initialState: ITodo = {
	id: null,
	title: '',
	completed: false
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {

	}
}