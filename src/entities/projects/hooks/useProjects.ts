import { fetchProjects } from '../api/fetchProjects'
import { QUERY_KEY } from './../const'
import { useQuery } from 'react-query'

export function useProjects() {
  const { data: projects = [], ...queryResult } = useQuery(QUERY_KEY, async () => await fetchProjects())
  return { projects, ...queryResult }
}