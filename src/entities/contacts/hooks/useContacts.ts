import { fetchContacts } from '../api/fetchContacts'
import { QUERY_KEY } from './../const'
import { useQuery } from "react-query"

export function useContacts() {
  const { data: contacts = [], ...queryResult } = useQuery(QUERY_KEY, async () => await fetchContacts())
  return { contacts, ...queryResult }
}