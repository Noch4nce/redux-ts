import React, { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../action-creators/fetchUsers'
import { useActions } from '../hooks/useAppDispatch'

const UserList: FC = () => {
	const { user, loading, error } = useTypedSelector((state) => state.user)
	const { fetchUsers } = useActions()

	useEffect(() => {
		fetchUsers()
	}, [])

	console.log(user, 'user')

	return <div>ASD</div>
}

export default UserList
