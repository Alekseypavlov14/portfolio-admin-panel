import { useAuthStore, adminSelector } from "@app/auth"
import { Navigate, Route, Routes } from "react-router-dom"

export function Routing() {
  const admin = useAuthStore(adminSelector)

  if (!admin) return (
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