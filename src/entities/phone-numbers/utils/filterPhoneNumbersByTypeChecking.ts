import { checkPhoneNumberType } from "./checkPhoneNumberType"
import { PhoneNumberEntity } from "../phone-number.entity"

export function filterPhoneNumbersByTypeChecking(phoneNumbers: unknown[]): PhoneNumberEntity[] {
  return phoneNumbers.filter(checkPhoneNumberType)
}