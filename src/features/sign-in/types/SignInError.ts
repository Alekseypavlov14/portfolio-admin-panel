import { SignInErrorReason } from "./SignInErrorReason"

export interface SignInError {
  message: string
  reason: SignInErrorReason
}