import React, { FC } from 'react'
import { useSelector } from 'react-redux'

const UserList: FC = () => {
	const users = useSelector((state) => state)
	console.log(users, 'users')

	return <div>ASD</div>
}

export default UserList
