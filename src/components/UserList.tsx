import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: FC = () => {
	const { user } = useTypedSelector((state) => state.user)
	console.log(user, 'users')

	return <div>ASD</div>
}

export default UserList
