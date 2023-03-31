import { FC, ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'

interface QueryProviderProps {
  children: ReactNode
}

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}