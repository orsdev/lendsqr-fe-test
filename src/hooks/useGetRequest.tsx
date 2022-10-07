/* eslint-disable */
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { fetcher } from 'App'

interface IProps {
  url: string
  key: any[]
  options?: UseQueryOptions
}

const useGetRequest = ({ url, key, options }: IProps) => {
  const { data, error, isLoading, isError, isRefetching, refetch } = useQuery(
    key,
    () =>
      fetcher({
        url,
        method: 'GET'
      }),
    // @ts-ignore
    { ...options }
  )

  return {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isRefetching
  }
}

export default useGetRequest
