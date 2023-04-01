import { Navigate, Route, Routes } from "react-router-dom"
import { useCheckAuth } from "@app/auth"

export function Routing() {
  const isAuthenticated = useCheckAuth()

  if (!isAuthenticated) return (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route path="*" element={<Navigate to='/login' /> } />
    </Routes>
  )
  
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path='*' element={<Navigate to='/' /> } />
    </Routes>
  )
}