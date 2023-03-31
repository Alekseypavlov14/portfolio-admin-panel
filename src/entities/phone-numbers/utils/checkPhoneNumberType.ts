import { PhoneNumberEntity } from '../phone-number.entity'

export function checkPhoneNumberType(phoneNumber: unknown): phoneNumber is PhoneNumberEntity {
  const typedPhoneNumber = phoneNumber as PhoneNumberEntity

  return (
    Boolean(typedPhoneNumber.id) &&
    Boolean(typedPhoneNumber.tel)
  )
}