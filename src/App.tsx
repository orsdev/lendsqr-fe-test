import { Route, Routes } from 'react-router-dom'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import { AppContextProvider } from 'context/combineContexts'
import Users from 'pages/Users/Users'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Routes>
      </AppContextProvider>
    </div>
  )
}

export default App
