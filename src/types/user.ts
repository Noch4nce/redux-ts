export interface UserStateTypes {
	user: any[]
	loading: boolean
	error: null | string
}

export enum UserActionTypes {
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

export type UserFieldTypes = FetchUserInterface | FetchUserSuccessInterface | FetchUserErrorInterface