import { filterAdminsByTypeChecking } from "../utils/filterAdminsByTypeChecking"
import { ADMINS_COLLECTION } from "./collection"
import { AdminEntity } from "../admin.entity"
import { getDocs } from "firebase/firestore"

export async function fetchAdmins(): Promise<AdminEntity[]> {
  const adminsDocs = await getDocs<unknown>(ADMINS_COLLECTION)
  const admins = adminsDocs.docs.map(doc => doc.data())
  const filteredAdmins = filterAdminsByTypeChecking(admins)
  return filteredAdmins
}