import { useNavigate } from "react-router-dom"

export function useNavigation() {
  const navigate = useNavigate()

  return ({
    navigateHomePage: () => navigate('/'),
    navigateLoginPage: () => navigate('/login')
  })
}