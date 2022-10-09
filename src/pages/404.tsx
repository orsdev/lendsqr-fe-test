import { Result } from 'antd'
import AppLayout from 'components/Layout/Layout'

const NotFound = () => {
  return (
    <AppLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </AppLayout>
  )
}

export default NotFound
