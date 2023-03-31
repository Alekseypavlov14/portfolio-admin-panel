import { ContactEntity } from './../contact.entity'

export function checkContactType(contact: unknown): contact is ContactEntity {
  const typedContact = contact as ContactEntity

  return (
    Boolean(typedContact.id) && 
    Boolean(typedContact.label) && 
    Boolean(typedContact.href) 
  )
}
