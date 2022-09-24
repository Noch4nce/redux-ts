import { UserActionTypes, UserFieldTypes } from '../types/user'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserFieldTypes>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			)
			dispatch({
				type: UserActionTypes.FETCH_USER_SUCCESS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: 'Fetch Error'
			})
		}
	}
}
