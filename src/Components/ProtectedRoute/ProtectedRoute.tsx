import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    // Редирект на вход с сохранением пути, куда хотел попасть пользователь
    return <Navigate to="/Loginpage" state={{ from: location }} replace />
  }

  return <>{children}</>
}