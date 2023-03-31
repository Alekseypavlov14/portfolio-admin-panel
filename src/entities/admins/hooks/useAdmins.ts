import { fetchAdmins } from "../api/fetchAdmins"
import { QUERY_KEY } from "../const"
import { useQuery } from "react-query"

export function useAdmins() {
  const { data: admins = [], ...queryResult } = useQuery(QUERY_KEY, async () => await fetchAdmins())
  return { admins, ...queryResult }
}