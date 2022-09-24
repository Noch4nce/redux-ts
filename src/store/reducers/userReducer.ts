interface UserStateTypes {
	user: any[]
	loading: boolean
	error: null | string
}

enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

interface FetchUserInterface {
	type: UserActionTypes.FETCH_USER
}

interface FetchUserSuccessInterface {
	type: UserActionTypes.FETCH_USER_SUCCESS
	payload: any[]
}

interface FetchUserErrorInterface {
	type: UserActionTypes.FETCH_USER_ERROR
	payload: string
}

type UserFieldTypes = FetchUserInterface | FetchUserSuccessInterface | FetchUserErrorInterface

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
