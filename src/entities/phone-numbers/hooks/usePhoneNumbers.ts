import { fetchPhoneNumbers } from '../api/fetchPhoneNumbers'
import { QUERY_KEY } from '../const'
import { useQuery } from 'react-query'

export function usePhoneNumbers() {
  const { data: phoneNumbers = [], ...queryResult } = useQuery(QUERY_KEY, async () => await fetchPhoneNumbers())
  return { phoneNumbers, ...queryResult }
}