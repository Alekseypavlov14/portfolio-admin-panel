import { checkContactType } from "./checkContactType"
import { ContactEntity } from './../contact.entity'

export function filterContactsByTypeChecking(contacts: unknown[]): ContactEntity[] {
  return contacts.filter(checkContactType)
}