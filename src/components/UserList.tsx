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

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{user.map((el) => (
				<div>{el.name}</div>
			))}
		</div>
	)
}

export default UserList
