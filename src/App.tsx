import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import { AppContextProvider } from 'context/combineContexts'
import Users from 'pages/Users/Users'
import { AxiosRequestConfig } from 'axios'
import api from 'api/axios'

// Create a client
const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options }).then((res: any) => res.data)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<Users />} />
          </Routes>
        </AppContextProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
