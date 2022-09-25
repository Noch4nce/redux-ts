import * as fetchUsers from './fetchUsers'
import * as fetchTodos from './fetchTodos'

export default {
	...fetchUsers,
	...fetchTodos
}
