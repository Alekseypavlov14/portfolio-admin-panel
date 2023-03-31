import { filterContactsByTypeChecking } from '../utils/filterContactsByTypeChecking'
import { CONTACTS_COLLECTION } from './collection'
import { ContactEntity } from '../contact.entity'
import { getDocs } from "firebase/firestore"

export async function fetchContacts(): Promise<ContactEntity[]> {
  const contactsDocs = await getDocs<unknown>(CONTACTS_COLLECTION)
  const contacts = contactsDocs.docs.map(doc => doc.data())
  const filteredContacts = filterContactsByTypeChecking(contacts)
  return filteredContacts
}