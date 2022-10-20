import { Button, Result } from 'antd'
import Spinner from 'common/Spinner'
import AppLayout from 'components/Layout/Layout'
import Container from 'components/Users/Details/Container'
import { useGetRequest } from 'hooks'
import { Outlet, useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()

  const {
    data: user,
    isLoading,
    error
  }: any = useGetRequest({
    url: `/users/${id as string}`,
    key: ['get-single-user', id],
    options: {
      enabled: id !== undefined || id !== null
    }
  })

  return (
    <AppLayout>
      {isLoading === true && <Spinner tip="Retrieving user details..." />}
      {Boolean(error) && (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={() => window.location.reload()}>
              Reload Browser
            </Button>
          }
        />
      )}
      {Boolean(user) && (
        <>
          <Container user={user} />
          <Outlet context={user} />
        </>
      )}
    </AppLayout>
  )
}

export default Details
