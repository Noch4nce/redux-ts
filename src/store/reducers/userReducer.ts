import { UserActionTypes, UserFieldTypes, UserStateTypes } from '../../types/user'

const initialState: UserStateTypes = {
	user: [],
	loading: false,
	error: null
}

export const userReducer = (
	state = initialState,
	action: UserFieldTypes
): UserStateTypes => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return { user: [], loading: true, error: null }
		case UserActionTypes.FETCH_USER_SUCCESS:
			return { user: action.payload, loading: false, error: null }
		case UserActionTypes.FETCH_USER_ERROR:
			return { user: [], loading: false, error: action.payload }
		default:
			return state
	}
}
