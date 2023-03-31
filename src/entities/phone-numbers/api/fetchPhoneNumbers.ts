import { filterPhoneNumbersByTypeChecking } from '../utils/filterPhoneNumbersByTypeChecking'
import { PHONE_NUMBERS_COLLECTION } from './collection'
import { PhoneNumberEntity } from '../phone-number.entity'
import { getDocs } from "firebase/firestore"

export async function fetchPhoneNumbers(): Promise<PhoneNumberEntity[]> {
  const phoneNumbersDocs = await getDocs<unknown>(PHONE_NUMBERS_COLLECTION)
  const phoneNumbers = phoneNumbersDocs.docs.map(doc => doc.data())
  const filteredPhoneNumbers = filterPhoneNumbersByTypeChecking(phoneNumbers)
  return filteredPhoneNumbers
}