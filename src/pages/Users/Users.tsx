import AppLayout from 'components/Layout/Layout'
import { Stats } from 'components/Users'
import UsersTable from 'components/Users/UsersTable'

const Users = () => {
  return (
    <AppLayout>
      <Stats />
      <UsersTable />
    </AppLayout>
  )
}

export default Users
